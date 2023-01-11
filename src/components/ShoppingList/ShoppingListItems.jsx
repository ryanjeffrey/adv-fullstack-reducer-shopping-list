import ShoppingListItem from './ShoppingListItem.jsx';

export default function ShoppingListItems({ shoppingList }) {
  return (
    <ul>
      {shoppingList.map((item) => {
        return (
          <li key={item.id}>
            <ShoppingListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}
