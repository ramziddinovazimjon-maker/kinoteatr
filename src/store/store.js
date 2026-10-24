import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import authReducer from './authSlice'
import ticketsReducer from './ticketsSlice'
import filmsReducer from './filmsSlice'
import { films } from '../films'

const rootReducer = combineReducers({
    auth: authReducer,
    tickets: ticketsReducer,
    films: filmsReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'tickets', 'films']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefault) =>
        getDefault({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})




export const persistor = persistStore(store)