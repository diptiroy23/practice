import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

export default function rootReducer(state = {}, action) {
  // always return a new object for the root state
  return {
    // the value of `state.todos` is whatever the todos reducer returns
    todos: todosReducer(state.todos, action),
    // For both reducers, we only pass in their slice of the state
    filters: filtersReducer(state.filters, action)
  }
}

//---------------------------------------------------------------------------------

import { combineReducers } from 'redux'

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer
})

export default rootReducer

//---------------------------------------------------------------------------------

const alwaysReturnHelloMiddleware = storeAPI => next => action => {
    const originalResult = next(action);
    // Ignore the original result, return something else
    return 'Hello!'
  };
  
  const middlewareEnhancer = applyMiddleware(alwaysReturnHelloMiddleware)
  const store = createStore(rootReducer, middlewareEnhancer)

 // ---------------------------------------------------------------------------------

  import { composeWithDevTools } from 'redux-devtools-extension'
  const composedEnhancer = composeWithDevTools(
    // EXAMPLE: Add whatever middleware you actually want to use here
    applyMiddleware(print1, print2, print3)
    // other store enhancers if any
  )
  
  const store = createStore(rootReducer, composedEnhancer)
  export default store

//  https://redux.js.org/tutorials/fundamentals/part-5-ui-react
  