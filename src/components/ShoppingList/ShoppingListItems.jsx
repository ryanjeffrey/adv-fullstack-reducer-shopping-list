import ShoppingListItem from './ShoppingListItem.jsx';

export default function ShoppingListItems({ 
  shoppingList, 
  handleBoughtChangedByItemId,
  handleItemDeleteByItemId
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
              }}
              handleItemDelete={() => {
                handleItemDeleteByItemId(item.id);
              }} />
          </li>
        );
      })}
    </ul>
  );
}
