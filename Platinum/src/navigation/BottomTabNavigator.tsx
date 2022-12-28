import React, { useState } from "react";
import { SCREENS } from "./SCREENS";
import HomeScreen from "../screens/Home/HomeScreen";
import CreateAccountScreen from "../screens/Auth/CreateAccountScreen";
import { BottomNavigation } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useScreenHeader } from "navigation/ScreenHeader";
import TicketsListScreen from "screens/Tickets/TicketsListScreen";


const BottomTabNavigator = () => {

    useScreenHeader({
        headerShown: false,
    }, []);

    const [index, setIndex] = useState(1);
    const [routes] = useState([
        {
            key: SCREENS.TICKETS,
            title: "Tickets",
            icon: "ticket",
        },
        {
            key: SCREENS.DISCOVER,
            title: "Discover",
            icon: "heart",
        },
        {
            key: SCREENS.SETTINGS,
            title: "Settings",
            icon: (props: any) => <MaterialIcons name={"settings"} {...props}/>
        },
    ]);

    // @ts-ignore
    const renderScene = BottomNavigation.SceneMap({
        [SCREENS.DISCOVER]: HomeScreen,
        // @ts-ignore
        [SCREENS.TICKETS]: TicketsListScreen,
        // @ts-ignore
        [SCREENS.SETTINGS]: TicketsListScreen,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            shifting={true}
        />
    );
};

export default BottomTabNavigator;
