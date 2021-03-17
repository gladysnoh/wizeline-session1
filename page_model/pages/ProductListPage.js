import navBarCmp from '../components/NavBarCmp'; 
import {Selector, t} from 'testcafe';

class ProductListPage {
    constructor() {
        this.title = Selector('.header_secondary_container #inventory_filter_container>.product_label');
        // Only the 4th product from the list(individual).
        this.sauceJacketAddToCartBtn = Selector('.btn_primary.btn_inventory')
        .nth(3);
        // Selecting all item cards using the class inventory_item (multiple)
        this.allItemCards = Selector('.inventory_item');
    }

    async addSingleItemAndGoToCart() {
        // click on add button
        await t.click(this.sauceJacketAddToCartBtn);
        //go to the shopping cart
        await t.click(navBarCmp.shoppingCartBtn);
    }
}

export default new ProductListPage();