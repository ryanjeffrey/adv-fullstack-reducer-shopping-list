import { client, checkError } from './client.js';

export async function getShoppingListItems() {
  const response = await client
    .from('shopping-list')
    .select(`
      *
`)
    .order('created_at', { ascending: false })
  ;
  return checkError(response);
}

export async function getShoppingListItem(shoppingListItemId) {
  const response = await client
    .from('shopping-list')
    .select(`
      *
`)
    .match({ id: shoppingListItemId })
    .single()
  ;
  return checkError(response);
}

export async function createShoppingListItem(item, quantity) {
  const response = await client
    .from('shopping-list')
    .insert({
      item,
      quantity
    })
  ;
  return checkError(response);
}

export async function updateShoppingItem(shoppingItemId, fields) {
  const response = await client
    .from('shopping-list')
    .update({
      ...fields,
    })
    .eq('id', shoppingItemId)
  ;
  return checkError(response);
}

export async function deleteShoppingItem(shoppingItemId) {
  const response = await client
    .from('shopping-list')
    .delete()
    .eq('id', shoppingItemId)
  ;
  return checkError(response);
}
