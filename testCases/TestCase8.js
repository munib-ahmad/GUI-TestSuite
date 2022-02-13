import selector from "../selector.js"
import mockData from "../mockData.js"

export const description = "This tests the add to cart feature after loging in to system"

async function TestCase8(_this) {
    try {
        console.log(description)
        console.log('Expected output user should be able to add products in cart from inventory page while logged in to system')
        
        await _this.getPage()
        await _this.login(mockData.standardUser.username, mockData.standardUser.password)

        await _this.clickBtn(selector.inventory.addToCartBtn)
        
        await _this.getPage('cart.html')

        const cartItems = await _this.getElements(selector.cart.itemsSelector)

        await _this.logout()

        const check = cartItems.length === 1
        _this.result(check)
        return check
    } catch (error) {
        console.log(error.message)
        _this.result(false)
        return false
    }
}

export default TestCase8;