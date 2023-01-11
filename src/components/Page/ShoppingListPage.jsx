import ShoppingListItems from '../ShoppingList/ShoppingListItems';
import { useContext, useEffect } from 'react';
import { Context } from '../ShoppingListProvider.jsx';
import { getShoppingListItems } from '../../services/shopping-list-items';
import { 
  shoppingListLoadSuccessAction 
} from '../../actions/shopping-list-actions.js';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    (async () => {
      const items = await getShoppingListItems();
      dispatch(shoppingListLoadSuccessAction(items));
    })();
  }, []);
  return <section>
    <h1>My Shopping List</h1>
    <ShoppingListItems shoppingList={state.shoppingList} />
  </section>;
}
