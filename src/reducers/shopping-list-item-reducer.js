export const initialState = () => {
  return {
    shoppingList: [],
    shoppingListCandidateItem: '',
    shoppingListCandidateQuantity: '',
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'shopping-list-load-success':
      return {
        ...state,
        shoppingList: action.shoppingList,
      };
    case 'shopping-list-candidate-item-changed':
      return {
        ...state,
        shoppingListCandidateItem: action.item,
      };
    case 'shopping-list-candidate-quantity-changed':
      return {
        ...state,
        shoppingListCandidateQuantity: action.quantity,
      };
    case 'shopping-list-item-bought-changed': {
      const shoppingList = [...state.shoppingList];
      const index = shoppingList.findIndex(
        (item) => item.id === action.itemId
      );
      shoppingList[index] = {
        ...shoppingList[index],
        bought: action.bought,
      };
      return {
        ...state,
        shoppingList,
      };
    }
    case 'shopping-list-item-deleted': {
      const shoppingList = [...state.shoppingList];
      const index = shoppingList.findIndex(
        (item) => item.id === action.itemId
      );
      shoppingList[index] = {
        ...shoppingList[index],
      };
      return {
        ...state,
        shoppingList,
      };
    }
    default:
      return state;
  }
};
