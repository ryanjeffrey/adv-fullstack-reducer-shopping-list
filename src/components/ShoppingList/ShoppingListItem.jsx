export default function ShoppingListItem({ item }) {
  return (
    <div>
      {item.item}
      {item.quantity}
      <input
        type="checkbox"
        value={item.bought}
        // TODO: Add handleBought function
      />
    </div>
  );
}
