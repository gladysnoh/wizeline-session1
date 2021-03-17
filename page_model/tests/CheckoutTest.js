import loginPage from '../pages/LoginPage'
import shoppingCartPage from '../pages/ShoppingCartPage';
import productListPage from '../pages/ProductListPage';
import checkOutPage from '../pages/CheckoutPage';
import overViewPage from '../pages/OverviewPage';

import {CREDENTIALS,CHECKOUTINFORMATION} from '../data/Constants';

fixture('Checkout tests')
.page `https://www.saucedemo.com/`
.beforeEach(async(t)=>{
    await loginPage.doLogin(CREDENTIALS.STANDARD_USERNAME, CREDENTIALS.PASSWORD);
    // For all checkout test we are gonna add a single item and then go to the shopping cart
    await productListPage.addSingleItemAndGoToCart();
    // Also we need to click the checkout utton located under the shopping cart page.
    await t.click(shoppingCartPage.checkOutBtn);
})
.afterEach(async()=>{
    await loginPage.doLogout();
});

test('7.- Click continue button without First Name information', async(t) =>{
    await t.typeText(checkOutPage.lastName, CHECKOUTINFORMATION.LAST_NAME);
    await t.typeText(checkOutPage.zipCode, CHECKOUTINFORMATION.ZIP);
    await t.click(checkOutPage.continueBtn);
    await t.expect(checkOutPage.errorRequiredMessage.innerText).contains('First Name is required')
}); 

test('8.- Populate all field and go to Overview page', async(t)=>{
    await t.typeText(checkOutPage.firstName, CHECKOUTINFORMATION.FIRST_NAME);
    await t.typeText(checkOutPage.lastName, CHECKOUTINFORMATION.LAST_NAME);
    await t.typeText(checkOutPage.zipCode, CHECKOUTINFORMATION.ZIP);
    await t.click(checkOutPage.continueBtn);
    await t.expect(overViewPage.finishBtn.exists).ok();
});

test('9.- Final order items', async(t)=>{
    await t.typeText(checkOutPage.firstName, CHECKOUTINFORMATION.FIRST_NAME);
    await t.typeText(checkOutPage.lastName, CHECKOUTINFORMATION.LAST_NAME);
    await t.typeText(checkOutPage.zipCode, CHECKOUTINFORMATION.ZIP);
    await t.click(checkOutPage.continueBtn);
    await t.expect(overViewPage.selectedItemNames.nth(0).innerText).eql('Sauce Labs Fleece Jacket');
});
