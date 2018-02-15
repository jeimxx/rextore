import { getRextore } from '../src/rextore';

const store = getRextore();

store.dispatch({ type: 'INCREASE' });
console.log('container 01 -', store.getState());
