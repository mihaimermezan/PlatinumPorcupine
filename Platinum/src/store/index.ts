import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./theme/slice";
import { authReducer } from "store/Auth/slice";
import { eventsReducer } from "./events/slice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        theme: themeReducer,
        events: eventsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
