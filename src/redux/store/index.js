import rootReducer from '../reducer'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

const initialState={}
const middlewares=[thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'root',
  storage,
  //blblacklist: ['user']
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store=createStore(
  persistedReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
)
export const persistor = persistStore(store)


