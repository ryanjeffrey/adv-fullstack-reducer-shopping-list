export default function ShoppingListItem({
  item,
  handleBoughtChanged,
  handleItemDelete,
}) {
  return (
    <div>
      <button
        id="delete-button"
        onClick={() => {
          handleItemDelete();
        }}
      >
        ❌
      </button>
      {item.quantity}
      {item.item}
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
