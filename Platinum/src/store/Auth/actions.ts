import { createAsyncApiCall } from "store/utils";
import { titaniumApi } from "api";

export const loginAction = createAsyncApiCall("auth/login", titaniumApi.login);

export const createAccountAction = createAsyncApiCall("auth/create-account", titaniumApi.createAccount);
