import { Selector } from "testcafe";

class CheckOutPage {
    constructor(){
        this.firstName = Selector('#first-name');
        this.lastName = Selector('#last-name');
        this.zipCode = Selector('#postal-code');
        this.continueBtn = Selector('.checkout_buttons .cart_button');
        this.errorRequiredMessage = Selector('.checkout_info_wrapper h3[data-test="error"]');
    }

}
export default new CheckOutPage();