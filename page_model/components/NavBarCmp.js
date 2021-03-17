import {Selector} from 'testcafe';
class NavBarCmp {
    constructor() {
        this.burguerMenuBtn = Selector('#react-burger-menu-btn');
        this.logoutOption = Selector('#logout_sidebar_link');
        this.shoppingCartBtn = Selector('#shopping_cart_container>.shopping_cart_link');
    }
}

export default new NavBarCmp();