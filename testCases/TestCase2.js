import selector from "../selector.js"
import mockData from "../mockData.js"

export const description = 'This tests login feature with invalid user credentials'

async function TestCase2(_this) {
    try {
        console.log(description)
        console.log('Expected output user should not be able to login and see error output for invalid credentials')

        await _this.getPage()
        await _this.login(mockData.standardUser.username, "wrong_password")
        const check = await _this.exists(selector.login.invalidCredentialsLabel)
        _this.result(!!check)
        return !!check
    } catch (error) {
        console.log(error.message)
        _this.result(false)
        return false
    }
}

export default TestCase2;