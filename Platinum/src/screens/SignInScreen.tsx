import React, { useCallback } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Title } from "react-native-paper";
import TPTextInput from "../../componets/TPTextInput";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../navigation/SCREENS";

const SingInScreen = () => {
    const navigation = useNavigation<any>();
    const { control, handleSubmit, getValues } = useForm({
        defaultValues: {
            "email": "",
        },
    });

    const signIn = useCallback(() => {
        console.log(getValues());
    }, [getValues]);

    const goToCreateAccount = useCallback(() => {
        navigation.navigate(SCREENS.SIGN_UP, {});
    }, [navigation]);

    return (
        <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps={"handled"}>
            <Title style={styles.title}>
                Welcome to FAIN Tourism
            </Title>
            <TPTextInput
                control={control}
                name={"email"}
                rules={{
                    required: true,
                }}
                label={"Email"}
            />
            <TPTextInput
                control={control}
                name={"password"}
                rules={{
                    required: true,
                }}
                label={"Password"}
            />
            <Button style={styles.button} mode={"contained"} onPress={handleSubmit(signIn)}>
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
        padding: "5%",
        flexGrow: 1,
        justifyContent: "center"
    },
    title: {
        textAlign: "center",
        marginVertical: 20
    },
    button: {
        marginVertical: 20
    }
});

export default SingInScreen;
