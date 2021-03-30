import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import rootSaga from './sagas/index'
import { AppState } from '../types'
import createRootReducer from './reducers'
function loadState(): (AppState | undefined) {
  try {
    const seriralizedSate = localStorage.getItem('state');
    if (!seriralizedSate) {
      return undefined;
    }
    return JSON.parse(seriralizedSate!);

  } catch (err) {
    return err;
  }
}
const initState: AppState = {
  user: {
    user: loadState() ? loadState()!.user.user : null,
    token: loadState() ? loadState()!.user.token : null,
    isLogin: loadState() ? loadState()!.user.isLogin : false
  },
  book: {
    books: loadState() ? loadState()!.book.books : null,
    loading: loadState() ? loadState()!.book.loading : false,
  }
}

export default function makeStore(initialState = initState) {
  const sagaMiddleWare = createSagaMiddleware()
  const middlewares = [sagaMiddleWare, thunk]
  let composeEnhancers = compose
  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(createRootReducer(), initialState as object, composeEnhancers(applyMiddleware(...middlewares)))

  sagaMiddleWare.run(rootSaga)

  if ((module as any).hot) {
    ; (module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}