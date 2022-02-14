import selector from "../selector.js"
import mockData from "../mockData.js"

export const description = "This tests the checkout flow from adding items to the cart and filling the checkout form"

async function TestCase10(_this) {
    try {
        console.log(description)
        console.log('Expected output user should be able to add items and proceed to checkout without any issues while logged in to system')
        
        await _this.getPage()
        await _this.login(mockData.standardUser.username, mockData.standardUser.password)
        await _this.clickBtn(selector.inventory.addToCartBtn)

        await _this.getPage('cart.html')

        await _this.clickBtn(selector.cart.checkoutBtn)

        await _this.typeText(selector.checkout.firstNameInput, mockData.firstName)
        await _this.typeText(selector.checkout.lastNameInput, mockData.lastName)
        await _this.typeText(selector.checkout.zipCodeInput, mockData.address.zipcode)

        await _this.clickBtn(selector.checkout.continueBtn)
        await _this.clickBtn(selector.checkout.finishBtn)

        const check = await _this.textIsMatching(selector.checkout.orderCompletedLabelSelector, selector.checkout.orderCompletedLabelText)

        await _this.logout()

        _this.result(check)
        return check
    } catch (error) {
        console.log(error.message)
        _this.result(false)
        return false
    }
}

export default TestCase10;