import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "./SCREENS";
import CreateAccountScreen from "../screens/Auth/CreateAccountScreen";
import PublicTransportScreen from "../screens/Transport/PublicTransportScreen";
import EventsScreen from "../screens/Events/EventsScreen";
import MapScreen from "../screens/Home/MapScreen";
import RandomExperienceScreen from "../screens/Experiences/RandomExperienceScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import LoginScreen from "../screens/Auth/LoginScreen";
import AddCreditCardScreen from "screens/Payment/AddCreditCardScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={SCREENS.LOGIN}>
            <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
            <Stack.Screen name={SCREENS.CREATE_ACCOUNT} component={CreateAccountScreen} />
            <Stack.Screen name={SCREENS.HOME} component={BottomTabNavigator} />
            <Stack.Screen name={SCREENS.PUBLIC_TRANSPORT} component={PublicTransportScreen} />
            <Stack.Screen name={SCREENS.EVENTS} component={EventsScreen} />
            <Stack.Screen name={SCREENS.MAP} component={MapScreen} />
            <Stack.Screen name={SCREENS.RANDOM_EXPERIENCE} component={RandomExperienceScreen} />
            <Stack.Screen name={SCREENS.ADD_CREDIT_CARD} component={AddCreditCardScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
