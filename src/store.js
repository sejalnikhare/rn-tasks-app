
// import { createStore } from "redux";
// import rootReducer from "./reducer/index";

// const store = createStore(rootReducer,);

// export default store;


import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from "./reducer/index";
// import todoReducer from './reducer';
import { createStore } from 'redux'
// import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = store;