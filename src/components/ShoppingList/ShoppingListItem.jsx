export default function ShoppingListItem({ item, handleBoughtChanged }) {
  return (
    <div>
      {item.item}
      {item.quantity}
      <input
        type="checkbox"
        value={item.bought}
        onChange={() => {
          handleBoughtChanged(!item.bought);
        }}
      />
    </div>
  );
}
