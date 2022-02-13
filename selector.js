export default {
    login: {
        btn: "//*[@id=\"login-button\"]",
        usernameInput: "//*[@id=\"user-name\"]",
        passwordInput: "//*[@id=\"password\"]",
        invalidCredentialsLabel: "//*[@id=\"login_button_container\"]/div/form/div[3]/h3"
    },
    menu: {
        btn: "//*[@id=\"react-burger-menu-btn\"]",
        options: {
            logoutBtn: "//*[@id=\"logout_sidebar_link\"]",
            resetAppStateBtn: "//*[@id=\"reset_sidebar_link\"]"
        }
    },
    inventory: {
        pageTitleSelector: "//*[@id=\"header_container\"]/div[2]/span",
        pageTitle: "Products",
        productCard: "//*[@class=\"inventory_item\"]",
        priceSelector: "//*[@class=\"inventory_item_price\"]",
        addToCartBtn: "//*[@class=\"btn btn_primary btn_small btn_inventory\"]",
        shoppingCartBadge: "//*[@class=\"shopping_cart_badge\"]",
        sortOptions: {
            btn: "//*[@id=\"header_container\"]/div[2]/div[2]/span/select",
            priceAsc: "//*[@id=\"header_container\"]/div[2]/div[2]/span/select/option[3]",
            priceDesc: "//*[@id=\"header_container\"]/div[2]/div[2]/span/select/option[4]"
        },
    },
    cart: {
        removeItemBtn: "//*[@class=\"btn btn_secondary btn_small cart_button\"]",
        itemsSelector: "//*[@class=\"cart_item\"]",
        checkoutBtn: "//*[@class=\"btn btn_action btn_medium checkout_button\"]",

    },
    checkout: {
        firstNameInput: "//*[@id=\"first-name\"]",
        lastNameInput: "//*[@id=\"last-name\"]",
        zipCodeInput: "//*[@id=\"postal-code\"]",
        continueBtn: "//*[@id=\"continue\"]",
        finishBtn: "//*[@id=\"finish\"]",
        orderCompletedLabelSelector: "//*[@id=\"checkout_complete_container\"]/div",
        orderCompletedLabelText: "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    }
}