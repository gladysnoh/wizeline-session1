import shoppingCartPage from '../pages/ShoppingCartPage';
import productListPage from '../pages/ProductListPage';
import navBarCmp from '../components/NavBarCmp';
import {standardUser} from '../data/Roles';

fixture('ShoppingCart tests')
    .beforeEach(async(t)=>{
        await t.useRole(standardUser);
    });
  

test('4.- Navigate to the ShoppingCart ', async (t) => {
    await t.click(navBarCmp.shoppingCartBtn);
    await t.expect(shoppingCartPage.title.exists).ok();
});

test('5.- Add single Item to the shopping cart', async (t) =>{
    await productListPage.addSingleItemAndGoToCart();
    // verifies we only have a single item on shopping cart
    await t.expect(shoppingCartPage.selectedItemNames.count).eql(1);
    // now we need to confirm that the single element on the shopping cart is the jacket product.
    await t.expect(shoppingCartPage.selectedItemNames.nth(0).innerText).eql('Sauce Labs Fleece Jacket');
}); 

test('6.- Add multiple items to the shopping cart', async (t) =>{
    const countAddButtons = await productListPage.allItemCards.count;
    //Loop into the all products list
    for (let index = 0; index < countAddButtons; index++) {
        //selector
        const addBtn = productListPage.allItemCards.nth(index)
        .child('.pricebar').child('.btn_primary.btn_inventory').withExactText('ADD TO CART');
        await t.click(addBtn);
    }
    await t.click(navBarCmp.shoppingCartBtn);
    // verifies we have all items on shopping cart (6 items)
    await t.expect(shoppingCartPage.selectedItemNames.count).eql(countAddButtons);
});
