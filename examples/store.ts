import { createRextore, createRootReducer, getRextore } from '../src/';
import { Observable } from 'rxjs/Observable'
import { tap, scan, merge, map } from 'rxjs/operators'
import 'rxjs/add/observable/of';

export interface State {
  count: any
}

const initialState = {
  count: 12
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
        return {
          ...state,
          count: ++state.count
        };
    case 'DECREASE':
    return {
      ...state,
      count: state.count - 1
    };
    default:
      return state
  }
}

const reducer2 = (state, action) => {
  switch (action.type) {
    case 'ADD2':
      const newName = action
        .payload
        .name
        .toUpperCase()
        return {
          ...state,
          name: newName
        };
    default:
      return state
  }
}
const rootReducer = createRootReducer({
  reducer, reducer2
})

const rextore = createRextore<State>(initialState, rootReducer);

console.log(rextore.getState());
console.log(getRextore().getState());
