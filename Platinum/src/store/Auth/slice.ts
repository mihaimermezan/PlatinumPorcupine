import { createSlice } from "@reduxjs/toolkit";
import { createAccountAction, loginAction } from "store/Auth/actions";

export interface AuthState {
    isAuthenticated: boolean,
    accessToken: string | null,
    refreshToken: string | null,
    login: {
        status: "idle" | "pending" | "success" | "error",
        error: any
    }
}

const initialState: AuthState = {
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
    login: {
        status: "idle",
        error: null,
    },
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signIn: (state) => {
            state.isAuthenticated = true;
        },
        signOut: (state) => {
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginAction.pending, (state, action) => {
            state.login.status = "pending";
        });
        builder.addCase(loginAction.rejected, (state, action) => {
            state.login.status = "error";
            state.login.error = action.error;
        });
        builder.addCase(loginAction.fulfilled, (state, action) => {
            const { accessToken, refreshToken } = action.payload;
            state.isAuthenticated = true;
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
        });
        builder.addCase(createAccountAction.fulfilled, (state, action) => {
            const { accessToken, refreshToken } = action.payload;
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
            state.isAuthenticated = true;
        })
    },
});

export const authReducer = authSlice.reducer;
