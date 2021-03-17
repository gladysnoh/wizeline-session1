import navBarCmp from '../components/NavBarCmp';
import { Selector, t } from 'testcafe';

class LoginPage {
    constructor() {
        this.userNameInput = Selector('.login-box input[name="user-name"]');
        this.passwordInput = Selector('#password');
        this.submitLoginBtn = Selector('.login-box input.btn_action[value="LOGIN"]');
        this.errorMessage = Selector('.login-box h3[data-test="error"]');
    }

    async doLogin(username, password) {
        await t
        //enter user name
        .typeText(this.userNameInput, username)
        //enter incorrect password
        .typeText(this.passwordInput, password)
        //click on login button
        .click(this.submitLoginBtn);
    }

    async doLogout() {
        await t.click(navBarCmp.burguerMenuBtn);
        await t.click(navBarCmp.logoutOption);
    }
}

export default new LoginPage();