import { DependencyList, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const useScreenHeader = (options: NativeStackNavigationOptions, deps: DependencyList | undefined = []) => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions(options);
  }, [navigation, ...deps]);
};
