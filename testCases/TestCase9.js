import selector from "../selector.js"
import mockData from "../mockData.js"

export const description = "This tests the remove from to cart feature after loging in to system"

async function TestCase9(_this) {
    try {
        console.log(description)
        console.log('Expected output user should be able to remove added products from the cart while logged in to system')
        
        await _this.getPage()
        await _this.login(mockData.standardUser.username, mockData.standardUser.password)
        await _this.clickBtn(selector.inventory.addToCartBtn)

        await _this.getPage('cart.html')

        await _this.clickBtn(selector.cart.removeItemBtn)

        const check = !await _this.exists(selector.cart.itemsSelector)

        await _this.logout()

        _this.result(check)
        return check
    } catch (error) {
        console.log(error.message)
        _this.result(false)
        return false
    }
}

export default TestCase9;