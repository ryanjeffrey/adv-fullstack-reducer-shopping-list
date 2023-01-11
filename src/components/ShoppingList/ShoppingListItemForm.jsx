export default function ShoppingListItemForm({
  item,
  quantity,
  onItemChanged,
  onQuantityChanged,
  onSubmit,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(item, quantity);
      }}
    >
      <input
        type="text"
        placeholder="item"
        value={item}
        onChange={(e) => {
          onItemChanged(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="qty"
        value={quantity}
        onChange={(e) => {
          onQuantityChanged(e.target.value);
        }}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}
