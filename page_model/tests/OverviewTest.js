import loginPage from '../pages/LoginPage'
import shoppingCartPage from '../pages/ShoppingCartPage';
import productListPage from '../pages/ProductListPage';
import checkOutPage from '../pages/CheckoutPage';
import overViewPage from '../pages/OverviewPage';
import finishPage from '../pages/FinishPage';
import {CREDENTIALS,CHECKOUTINFORMATION} from '../data/Constants';

fixture('Checkout tests')
.page `https://www.saucedemo.com/`
.beforeEach(async(t)=>{
    await loginPage.doLogin(CREDENTIALS.STANDARD_USERNAME, CREDENTIALS.PASSWORD);
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
})
.afterEach(async()=>{
    await loginPage.doLogout();
});

test.only('10.- Complete a purchase', async(t)=>{
    await t.click(overViewPage.finishBtn);
    await t.expect(finishPage.thanksMessage.innerText).eql('THANK YOU FOR YOUR ORDER');
});