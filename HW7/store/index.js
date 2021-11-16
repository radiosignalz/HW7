import {combineReducers, createStore,compose,applyMiddleware} from 'redux';
import {profileReducer}from './profile/reducer'
import {chatsReducer} from './chats/reducer';
import {messagesReducer} from './messages/reducer'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import {persistStore,persistReducer} from "redux-persist";


const persistConfig={
    key:'root',
    storage,
}


const rootReducer = combineReducers({
    profile:profileReducer,
    messages:messagesReducer,
    chats:chatsReducer,
})

const persistedReducer=persistReducer(persistConfig,rootReducer)

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
    );
console.log(store);

export const persistor = persistStore(store)