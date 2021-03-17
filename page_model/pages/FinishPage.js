import { Selector } from "testcafe";

class FinishTest {
    constructor(){
        this.thanksMessage = Selector('.checkout_complete_container>h2')
    }
}
export default new FinishTest();