import {Selector} from 'testcafe';

class OverViewPage{
    constructor(){
        this.finishBtn = Selector('.cart_footer .btn_action.cart_button').withExactText('FINISH');
        this.selectedItemNames = Selector('.cart_list .cart_item .cart_item_label .inventory_item_name');
    }
}

export default new OverViewPage();