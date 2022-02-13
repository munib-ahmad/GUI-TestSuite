import selector from "../selector.js"
import mockData from "../mockData.js"

export const description = 'This tests the access to inventory page without login'

async function TestCase3(_this) {
    try {
        console.log(description)
        console.log('Expected output user should not be able to access inventory page without login')
        
        await _this.getPage('inventory.html')
        const check = await _this.exists(selector.login.invalidCredentialsLabel)
        _this.result(!!check)
        return !!check
    } catch (error) {
        console.log(error.message)
        _this.result(false)
        return false
    }
}

export default TestCase3;