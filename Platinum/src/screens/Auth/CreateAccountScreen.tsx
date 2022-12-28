import React, { useCallback } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useScreenHeader } from "navigation/ScreenHeader";
import { Button, TextInput, Title } from "react-native-paper";
import TPTextInput from "componets/TPTextInput";
import { useForm } from "react-hook-form";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useAppDispatch } from "store/hooks";
import { createAccountAction } from "store/Auth/actions";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteNavigationParams } from "navigation/types";
import { SCREENS } from "navigation/SCREENS";
import { RouteProp } from "@react-navigation/native";

enum FORM {
    FIRST_NAME = "firstName",
    LAST_NAME = "lastName",
    EMAIL = "email",
    PASSWORD = "password",
    CONFIRM_PASSWORD = "confirmPassword"
}

type Props = {
    navigation: NativeStackNavigationProp<RouteNavigationParams, SCREENS.CREATE_ACCOUNT>,
    route: RouteProp<RouteNavigationParams, SCREENS.CREATE_ACCOUNT>,
};

const CreateAccountScreen = ({ navigation }: Props) => {

    useScreenHeader({
        headerTitle: "Create account",
    }, []);

    const { control, getValues, handleSubmit, setFocus, setError } = useForm({
        defaultValues: {
            [FORM.FIRST_NAME]: "",
            [FORM.LAST_NAME]: "",
            [FORM.EMAIL]: "",
            [FORM.PASSWORD]: "",
            [FORM.CONFIRM_PASSWORD]: "",
        },
    });
    const dispatch = useAppDispatch();

    const createAccount = useCallback(() => {
        const { firstName, lastName, email, password, confirmPassword } = getValues();
        if (password !== confirmPassword) {
            setError(FORM.CONFIRM_PASSWORD, { type: "validate" });
            return;
        }
        dispatch(createAccountAction({ firstName, lastName, email, password })).then(
            (result) => {
                if (result.meta.requestStatus === "fulfilled") {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: SCREENS.HOME }],
                    });
                }
            },
        );
    }, []);

    const focusLastNameInput = useCallback(() => {
        setFocus(FORM.LAST_NAME);
    }, []);

    const focusEmailInput = useCallback(() => {
        setFocus(FORM.EMAIL);
    }, []);

    const focusPasswordInput = useCallback(() => {
        setFocus(FORM.PASSWORD);
    }, []);

    const focusConfirmPasswordInput = useCallback(() => {
        setFocus(FORM.CONFIRM_PASSWORD);
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps={"handled"}>
            <Title style={styles.title}>
                Welcome to FAIN Tourism
            </Title>
            <TPTextInput
                control={control}
                name={FORM.FIRST_NAME}
                rules={{
                    required: true,
                }}
                label={"First Name"}
                autoComplete={"name-given"}
                autoCapitalize={"words"}
                returnKeyType={"next"}
                blurOnSubmit={false}
                onSubmitEditing={focusLastNameInput}
                left={<TextInput.Icon icon={(props: any) => <MaterialIcons name={"person"} {...props} />} />}
            />
            <TPTextInput
                control={control}
                name={FORM.LAST_NAME}
                rules={{
                    required: true,
                }}
                label={"Last Name"}
                autoComplete={"name-family"}
                autoCapitalize={"words"}
                returnKeyType={"next"}
                blurOnSubmit={false}
                onSubmitEditing={focusEmailInput}
                left={<TextInput.Icon icon={(props: any) => <MaterialIcons name={"person"} {...props} />} />}
            />
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
                returnKeyType={"next"}
                blurOnSubmit={false}
                onSubmitEditing={focusConfirmPasswordInput}
                left={<TextInput.Icon name={"lock"} />}
            />
            <TPTextInput
                control={control}
                name={FORM.CONFIRM_PASSWORD}
                rules={{
                    required: true,
                }}
                label={"Confirm Password"}
                autoComplete={"password-new"}
                autoCapitalize={"none"}
                secureTextEntry={true}
                left={<TextInput.Icon name={"lock"} />}
            />
            <Button mode={"contained"} onPress={handleSubmit(createAccount)}>
                Create Account
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

export default CreateAccountScreen;
