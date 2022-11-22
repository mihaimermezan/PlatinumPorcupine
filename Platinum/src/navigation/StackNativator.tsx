import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingInScreen from "../screens/Auth/SignInScreen";
import { SCREENS } from "./SCREENS";
import SignUpScreen from "../screens/Auth/SignUpScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={SCREENS.SIGN_IN} component={SingInScreen}/>
            <Stack.Screen name={SCREENS.SIGN_UP} component={SignUpScreen}/>
        </Stack.Navigator>
    )
};

export default StackNavigator;
