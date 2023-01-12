export const shoppingListLoadSuccessAction = (shoppingList) => {
  return {
    type: 'shopping-list-load-success',
    shoppingList,
  };
};

export const shoppingListCandidateItemChanged = (item) => {
  return {
    item,
    type: 'shopping-list-candidate-item-changed',
  };
};

export const shoppingListCandidateQuantityChanged = (quantity) => {
  return {
    quantity,
    type: 'shopping-list-candidate-quantity-changed',
  };
};

export const shoppingListItemBoughtChanged = (itemId, bought) => {
  return {
    itemId,
    bought,
    type: 'shopping-list-item-bought-changed',
  };
};

export const shoppingListItemDeleted = (itemId) => {
  return {
    itemId,
    type: 'shopping-list-item-deleted',
  };
};
