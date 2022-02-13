import selector from "../selector.js"
import mockData from "../mockData.js"

export const description = 'This tests login feature with standard user credentials'

async function TestCase1(_this) {
    try {
        console.log(description)
        console.log('Expected output user should be able to access inventory page after login')
        
        await _this.getPage()
        await _this.login(mockData.standardUser.username, mockData.standardUser.password)
        const check = await _this.textIsMatching(selector.inventory.pageTitleSelector, selector.inventory.pageTitle)
        await _this.logout()
        _this.result(check)
        return check
    } catch (error) {
        console.log(error.message)
        _this.result(false)
        return false
    }
}

export default TestCase1;