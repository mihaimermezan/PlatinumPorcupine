import React, { useCallback, useRef } from "react";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

export const MainNavigator = () => {
    const routeName = useRef<string>();
    const navigationRef = useNavigationContainerRef();

    const onStateChange = useCallback(async () => {
        const previousRouteName = routeName.current;
        const currentRouteName = navigationRef?.getCurrentRoute?.()?.name;

        if (previousRouteName !== currentRouteName) {
            // await analytics().setCurrentScreen(currentRouteName);
        }

        routeName.current = currentRouteName;
    }, []);

    const onReady = useCallback(() => {
        routeName.current = navigationRef?.getCurrentRoute?.()?.name;
    }, []);

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={onReady}
            onStateChange={onStateChange}
        >
            <StackNavigator />
        </NavigationContainer>
    );
};
