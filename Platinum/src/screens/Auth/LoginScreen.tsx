import React, { useCallback } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";
import TPTextInput from "../../componets/TPTextInput";
import { useForm } from "react-hook-form";
import { RouteProp } from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

import { SCREENS } from "navigation/SCREENS";
import { useScreenHeader } from "navigation/ScreenHeader";
import { useAppDispatch } from "store/hooks";
import { loginAction } from "store/Auth/actions";
import { RouteNavigationParams } from "navigation/types";

enum FORM {
    EMAIL = "email",
    PASSWORD = "password"
}


type Props = {
    navigation: NativeStackNavigationProp<RouteNavigationParams, SCREENS.LOGIN>,
    route: RouteProp<RouteNavigationParams, SCREENS.LOGIN>,
};


const SingInScreen = ({navigation}: Props) => {

    useScreenHeader({
        headerTitle: "Login",
    }, []);

    const dispatch = useAppDispatch();
    const { control, handleSubmit, getValues, setFocus } = useForm({
        defaultValues: {
            [FORM.EMAIL]: "",
            [FORM.PASSWORD]: "",
        },
    });

    const login = useCallback(() => {
        dispatch(loginAction(getValues())).then(
            (result) => {
                if (result.meta.requestStatus === "fulfilled") {
                    navigation.replace(SCREENS.HOME);
                } else {
                    console.warn(result);
                }
            },
        );
    }, []);

    const goToCreateAccount = useCallback(() => {
        navigation.navigate(SCREENS.CREATE_ACCOUNT);
    }, [navigation]);

    const focusPasswordInput = useCallback(() => {
        setFocus(FORM.PASSWORD);
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps={"handled"}>
            <Title style={styles.title}>
                Welcome to FAIN Tourism
            </Title>
            <TPTextInput
                control={control}
                name={FORM.EMAIL}
                rules={{
                    required: true,
                }}
                label={"Email"}
                keyboardType={"email-address"}
                autoComplete={"email"}
                autoCapitalize={"none"}
                returnKeyType={"next"}
                blurOnSubmit={false}
                onSubmitEditing={focusPasswordInput}
                left={<TextInput.Icon name={"email"} />}
            />
            <TPTextInput
                control={control}
                name={FORM.PASSWORD}
                rules={{
                    required: true,
                }}
                label={"Password"}
                autoComplete={"password"}
                autoCapitalize={"none"}
                secureTextEntry={true}
                left={<TextInput.Icon name={"lock"} />}
            />
            <Button style={styles.button} mode={"contained"} onPress={handleSubmit(login)}>
                Sign In
            </Button>
            <Button style={styles.button} mode={"outlined"} onPress={goToCreateAccount}>
                Sign Up
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        padding: 20,
        flexGrow: 1,
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        marginVertical: 20,
    },
    button: {
        marginVertical: 20,
    },
});

export default SingInScreen;
