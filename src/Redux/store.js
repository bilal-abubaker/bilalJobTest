import { createStore, combineReducers, applyMiddleware } from "redux";
import contactReducer from "./contacts/reducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'

const rootReducer = combineReducers({
  contacts: contactReducer,
})
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

 export const store = createStore(persistedReducer,
  applyMiddleware(thunk)
);

export const persistedStore = persistStore(store)
