import { Reducer } from './interfaces'

export const createRootReducer = (reducers: any): Reducer<any> => (
  (state, action) => Object.keys(reducers)
    .reduce((nextState, key) => reducers[key](nextState, action), state)
  )
