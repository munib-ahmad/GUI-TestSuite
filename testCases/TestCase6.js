import selector from "../selector.js"
import mockData from "../mockData.js"

export const description = 'This tests that procuts are sorted correctly with prices on inventory page after login (ASC)'

async function TestCase6(_this) {
    try {
        console.log(description)
        console.log('Expected output user should be able to see products on inventory page sorted with least price first after login')
        
        await _this.getPage()
        await _this.login(mockData.standardUser.username, mockData.standardUser.password)

        await _this.clickBtn(selector.inventory.sortOptions.btn)
        await _this.wait(100)
        await _this.clickBtn(selector.inventory.sortOptions.priceAsc)

        let prices = await _this.getElements(selector.inventory.priceSelector)
        prices = (await Promise.all(prices.map( p => p.getText()))).map(x => parseInt(x.replace("$", "")))
        
        const check = prices.isSorted()

        await _this.logout()

        _this.result(check)
        return !!check
    } catch (error) {
        console.log(error.message)
        _this.result(false)
        return false
    }
}

export default TestCase6;