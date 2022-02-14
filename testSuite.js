import { Builder } from 'selenium-webdriver';
import Utility from "./utility/index.js"
import glob from "glob"
import inquirer from "inquirer"

async function TestSuite(weburl) {
    let driver = undefined
    try {
        let testCases = new Promise((resolve, reject) => {
            glob("./testCases/*.js", {}, async function (err, testCases) {
               if (err) reject (err)
                resolve(testCases)   
            })
        })
    
        testCases = await testCases
        testCases = await Promise.all(testCases.map(t => import(t)))
    
        if (process.env.FULL_SUITE === "false") {
            const answer = await inquirer.prompt({
                type: "list",
                name: "TestCase",
                choices: testCases.map(x => ({ name: `${x.default.name}: ${x.description}`, value: x.default.name }))
            })
            testCases = testCases.filter(t => t.default.name === answer.TestCase)
        }

    
        driver = await new Builder().forBrowser('chrome').build();
        const util = new Utility(driver, weburl)
    
        const results = []
        for (const testCase of testCases) {
            try {
                const result = await util.execute(testCase.default)
                await util.wait(200)
                results.push({ result, name: testCase.default.name })
            } catch (error) {
                console.log(error)
            }
        }

        console.log(`Total: ${results.length}, Successfull: ${results.filter(x => x.result).length}, Failed: ${results.filter(x => !x.result).length}`)
    } finally {
        driver && driver.quit();
    }
}

export default TestSuite;