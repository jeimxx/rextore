import { getRextore } from '../src/rextore';

const store = getRextore();

store.dispatch({ type: 'DECREASE' });
console.log('container 02 -', store.getState());
