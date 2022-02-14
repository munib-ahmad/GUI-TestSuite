import "chromedriver";
import "./prototype.js"
import TestSuite from './testSuite.js';

const weburl = 'https://www.saucedemo.com/'; // saucedemo.com is a mock website for UI testing provided by saucelabs.com

(async function () {    
    if (process.env.FULL_SUITE === "true") console.time("TestSuite")
    await TestSuite(weburl);
    if (process.env.FULL_SUITE === "true") console.timeEnd("TestSuite")
})();
