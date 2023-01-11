import { 
  shoppingListLoadSuccessAction 
} from '../actions/shopping-list-actions.js';
import { getShoppingListItems } from '../services/shopping-list-items';

export const getShoppingListItemsEffect = async (dispatch) => {
  const items = await getShoppingListItems();
  dispatch(shoppingListLoadSuccessAction(items));
};
