import shoppingCartPage from '../pages/ShoppingCartPage';
import productListPage from '../pages/ProductListPage';
import checkOutPage from '../pages/CheckoutPage';
import overViewPage from '../pages/OverviewPage';
import finishPage from '../pages/FinishPage';
import {CHECKOUTINFORMATION} from '../data/Constants';
import { standardUser } from '../data/Roles';

fixture('Checkout tests')
.beforeEach(async(t)=>{
    await t.useRole(standardUser);
    // For all checkout test we are gonna add a single item and then go to the shopping cart
    await productListPage.addSingleItemAndGoToCart();
    // Also we need to click the checkout utton located under the shopping cart page.
    await t.click(shoppingCartPage.checkOutBtn);
    // fill information
    await t.typeText(checkOutPage.firstName, CHECKOUTINFORMATION.FIRST_NAME);
    await t.typeText(checkOutPage.lastName, CHECKOUTINFORMATION.LAST_NAME);
    await t.typeText(checkOutPage.zipCode, CHECKOUTINFORMATION.ZIP);
    // go to the overview page.
    await t.click(checkOutPage.continueBtn);
});

test.only('10.- Complete a purchase', async(t)=>{
    await t.click(overViewPage.finishBtn);
    await t.expect(finishPage.thanksMessage.innerText).eql('THANK YOU FOR YOUR ORDER');
});