import {Role} from 'testcafe';
import loginPage from '../pages/LoginPage';
import {CREDENTIALS} from '../data/Constants';

export const standardUser = Role ('https://www.saucedemo.com/', async () =>{
    await loginPage.doLogin(CREDENTIALS.STANDARD_USERNAME, CREDENTIALS.PASSWORD);
}, { preserveUrl: true });