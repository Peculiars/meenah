import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Import storage engine
import meenahReducer from '../redux/meenahSlicer';

const persistConfig = {
    key: "root",
    version: 1,
    storage: storage // Use localStorage as the storage engine
};

const persistedReducer = persistReducer(persistConfig, meenahReducer);

export const store = configureStore({
    reducer: {
        meenah: persistedReducer // Pass the persisted reducer here
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: ['FLUSH', 'REHYDRATE', 'PAUSE', 'PERSIST', 'PURGE', 'REGISTER'],
        },
    })
});

export let persistor = persistStore(store);
