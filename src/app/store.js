import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/UserSlice';



export default  configureStore({
    reducer: {
        user:userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});
