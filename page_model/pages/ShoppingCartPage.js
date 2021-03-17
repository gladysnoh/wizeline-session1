import {Selector} from 'testcafe';

class ShoppingCartPage{
    constructor (){
        this.title = Selector('#cart_contents_container .cart_footer .btn_action.checkout_button');
        //Select list of product names already added into the shopping cart
        this.selectedItemNames = Selector('.cart_list .cart_item .cart_item_label .inventory_item_name');
        //Selector fot getting the chechout button
        this.checkOutBtn = Selector('.cart_footer .btn_action.checkout_button');
    }
}

export default new ShoppingCartPage();