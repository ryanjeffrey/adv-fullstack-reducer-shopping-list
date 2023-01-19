import { 
  shoppingListCandidateItemChanged, shoppingListCandidateQuantityChanged 
} from '../actions/shopping-list-actions';
import { reducer, initialState } from './shopping-list-item-reducer';

describe('Shopping List Reducer', () => {
  it('user can input a new list item', () => {
    const oldState = {
      ...initialState(),
      shoppingListCandidateItem: 'cheese',
    };
    const newState = reducer(
      oldState,
      shoppingListCandidateItemChanged('green beans')
    );
    expect(newState.shoppingListCandidateItem).toEqual('green beans');
  });

  it('user can input quantity for item', () => {
    const oldState = {
      ...initialState(),
      shoppingListCandidateQuantity: 5,
    };
    const newState = reducer(
      oldState,
      shoppingListCandidateQuantityChanged(10)
    );
    expect(newState.shoppingListCandidateQuantity).toEqual(10);
  });

});
