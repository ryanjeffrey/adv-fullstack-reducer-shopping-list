import ShoppingListItem from './ShoppingListItem.jsx';

export default function ShoppingListItems({ 
  shoppingList, 
  handleBoughtChangedByItemId,
}) {
  return (
    <ul>
      {shoppingList.map((item) => {
        return (
          <li key={item.id}>
            <ShoppingListItem 
              item={item} 
              handleBoughtChanged={(bought) => {
                handleBoughtChangedByItemId(item.id, bought);
              }} />
          </li>
        );
      })}
    </ul>
  );
}
