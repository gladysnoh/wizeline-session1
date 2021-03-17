import loginPage from '../pages/LoginPage';
import productListPage from '../pages/ProductListPage';
import navBarCmp from '../components/NavBarCmp';
import {CREDENTIALS} from '../data/Constants';

fixture('Login tests')
    .page `https://www.saucedemo.com/`;

test('1.- Login with a valid user ', async (t) => {
    await loginPage.doLogin(CREDENTIALS.STANDARD_USERNAME, CREDENTIALS.PASSWORD);
    //await t.expect(productListPage.title.exists).ok();
    // eql
    await t.expect(productListPage.title.innerText).eql('Products');
});

test('2.- a) Login with a locked out user', async (t) =>{
    await loginPage.doLogin(CREDENTIALS.LOCKED_OUT_USERNAME, CREDENTIALS.PASSWORD);
    //Expected
    await t.expect(loginPage.errorMessage.innerText).contains('locked out', 'The provided user is not locked out');
});
test.only('2.- b) Login with invalid credentials(wrong user)', async (t) => {
    await loginPage.doLogin(CREDENTIALS.INVALID_USERNAME, CREDENTIALS.PASSWORD);
    await t.expect(loginPage.errorMessage.innerText).contains('do not match');
});

test('2.- c) Login with invalid credentials(wrong password', async (t) => {
    await loginPage.doLogin(CREDENTIALS.STANDARD_USERNAME, CREDENTIALS.INVALID_PASSWORD);
    await t.expect(loginPage.errorMessage.innerText).contains('do not match');
});

test('3.- Logout', async(t) =>{
     await loginPage.doLogin(CREDENTIALS.STANDARD_USERNAME, CREDENTIALS.PASSWORD);
     await loginPage.doLogout();
     await t.expect(loginPage.userNameInput.exists).ok();
});