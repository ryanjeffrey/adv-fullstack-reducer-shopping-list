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
    default:
      return state;
  }
};
