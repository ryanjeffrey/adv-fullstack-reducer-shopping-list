import ShoppingListItems from '../ShoppingList/ShoppingListItems';
import { useContext, useEffect } from 'react';
import { Context } from '../ShoppingListProvider.jsx';
import { createShoppingListItem, updateShoppingItem } from '../../services/shopping-list-items';
import {
  shoppingListCandidateItemChanged,
  shoppingListCandidateQuantityChanged,
  shoppingListItemBoughtChanged,
} from '../../actions/shopping-list-actions.js';
import ShoppingListItemForm from '../ShoppingList/ShoppingListItemForm';
import { 
  getShoppingListItemsEffect 
} from '../../effects/shopping-list-effects';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    getShoppingListItemsEffect(dispatch);
  }, []);
  const onItemChanged = (item) => {
    dispatch(shoppingListCandidateItemChanged(item));
  };
  const onQuantityChanged = (quantity) => {
    dispatch(shoppingListCandidateQuantityChanged(quantity));
  };
  const dispatchBoughtChanged = (itemId, bought) => {
    dispatch(shoppingListItemBoughtChanged(itemId, bought));
  };
  return (
    <section>
      <h1>My Shopping List</h1>
      <ShoppingListItemForm
        item={state.shoppingListCandidateItem}
        onItemChanged={onItemChanged}
        quantity={state.shoppingListCandidateQuantity}
        onQuantityChanged={onQuantityChanged}
        onSubmit={async (item, quantity) => {
          await createShoppingListItem(item, quantity);
          getShoppingListItemsEffect(dispatch);
          dispatch(shoppingListCandidateItemChanged(''));
          dispatch(shoppingListCandidateQuantityChanged(''));
        }}
      />
      <ShoppingListItems
        shoppingList={state.shoppingList}
        handleBoughtChangedByItemId={async (itemId, bought) => {
          await updateShoppingItem(itemId, bought);
          dispatchBoughtChanged(itemId, bought);
        }}
      />
    </section>
  );
}
