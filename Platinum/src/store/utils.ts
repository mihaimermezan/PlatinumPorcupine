import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export type ApiError = {
    response: AxiosResponse
}

export const createAsyncApiCall = <PayloadType, ReturnedType>(typePrefix: string, apiFunction: (payload: PayloadType) => Promise<AxiosResponse<ReturnedType>>) =>
    createAsyncThunk(typePrefix, async (payload: PayloadType, thunkAPI) => {
        const config = {
            headers: {
                "X-Access-Token":
                    "1234",
            },
        };
        try {
            // @ts-ignore
            const response = await apiFunction(payload || config, payload && config);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue((error as ApiError).response.data);
        }
    });
