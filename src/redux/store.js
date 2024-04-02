import { configureStore } from '@reduxjs/toolkit';
import meenahReducer from '../redux/meenahSlicer';

export const store = configureStore({
    reducer: {
        meenah: meenahReducer
    },
})
 