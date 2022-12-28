import 'react-native-url-polyfill/auto';
import { DefaultApi } from "api/generated";

export const titaniumApi = new DefaultApi(undefined, "http://192.168.1.2:5080");
