import selector from "../selector.js"
import mockData from "../mockData.js"

export const description = 'This tests that procuts are available on inventory page after login'

async function TestCase5(_this) {
    try {
        console.log(description)
        console.log('Expected output user should be able to see products after login')
        
        await _this.getPage()
        await _this.login(mockData.standardUser.username, mockData.standardUser.password)
        
        const products = await _this.getElements(selector.inventory.productCard)
        const check = !!products.length

        await _this.logout()

        _this.result(check)
        return check
    } catch (error) {
        console.log(error.message)
        _this.result(false)
        return false
    }
}

export default TestCase5;