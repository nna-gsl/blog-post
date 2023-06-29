import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const reducer = combineReducers({
    [apiSlice.reducerPath] : apiSlice.reducer
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({serializableCheck: false})
        .concat(apiSlice.middleware)
})
setupListeners(store.dispatch);
export default store;