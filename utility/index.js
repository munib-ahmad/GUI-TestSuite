import { By } from 'selenium-webdriver'
import emoji from "node-emoji"
import selector from "../selector.js"

class Utility {
    constructor(driver, weburl) {
        this.driver = driver
        this.weburl = weburl
    }

    async login (username, password) {
        await this.typeText(selector.login.usernameInput, username)
        await this.typeText(selector.login.passwordInput, password)
        await this.clickBtn(selector.login.btn)
    }

    async logout () {
        await this.clickBtn(selector.menu.btn)
        await this.wait(200)
        await this.clickBtn(selector.menu.options.resetAppStateBtn)
        await this.clickBtn(selector.menu.options.logoutBtn)
    }

    getPage (url = "") {
        return this.driver.get(!url ? this.weburl : this.weburl + url )
    }
    
    clickBtn(selector) {
        return this.driver.findElement(By.xpath(selector)).click()
    }
    
    typeText(selector, text) {
       return this.driver.findElement(By.xpath(selector)).sendKeys(text)
    }
    
    async exists(selector) {
        try {
            const el = await this.driver.findElement(By.xpath(selector))
            return el
        } catch (error) {
            return undefined
        }
    }

    getElements(selector) {
        return this.driver.findElements(By.xpath(selector))
    }

    getElement(selector) {
        return this.driver.findElement(By.xpath(selector))
    }
    
    async textIsMatching(selector, text) {
        return (await this.driver.findElement(By.xpath(selector)).getText()).toLowerCase() === text.toLowerCase()
    }

    addLog(title, end = false, ...msg) {
        if (!title || !String(title).trim() ) throw "title is required argument"
        
        if (!end) {
            console.log(`-------------${title} started-------------`)
            console.time(title)
            if (msg.length) console.log(...msg)
        } else {
            if (msg.length) console.log(...msg)
            console.timeEnd(title)
            console.log(`-------------${title} ended-------------\n`)
        }

    }

    async execute (func) {
        this.addLog(func.name, false)
        const response = await func(this)
        this.addLog(func.name, true)
        return response
    }

    async wait (time = 1000) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(time)
            }, time);
        })
    }

    result (isPassed) {
        isPassed ? console.log(`${emoji.get('heavy_check_mark')}  Passed`) : console.log(`${emoji.get('x')} Failed`)
    }
}

export default Utility