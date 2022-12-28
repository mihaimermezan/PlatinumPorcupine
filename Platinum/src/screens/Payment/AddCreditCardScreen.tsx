import React, { useCallback } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useScreenHeader } from "navigation/ScreenHeader";
import TPTextInput from "componets/TPTextInput";
import { useForm } from "react-hook-form";
import { Button } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteNavigationParams } from "navigation/types";
import { SCREENS } from "navigation/SCREENS";
import { RouteProp } from "@react-navigation/native";

enum FORM {
    CARD_NUMBER = "cardNumber",
    CARDHOLDER_NAME = "cardholderName",
    EXPIRY_DATE = "expiryDate",
    CVC = "cvc"
}

const formatCardNumber = (value: string) => {
    return (
        value.replace(/\s|[^0-9]+/g, "")
            .match(/.{1,4}/g)
            ?.join(" ") ?? ""
    );
};

type Props = {
    navigation: NativeStackNavigationProp<RouteNavigationParams, SCREENS.LOGIN>,
    route: RouteProp<RouteNavigationParams, SCREENS.LOGIN>,
};

const AddCreditCardScreen = ({navigation}: Props) => {

    useScreenHeader({
        headerTitle: "Add new card",
    }, []);

    const { control, getValues, setFocus, setValue, handleSubmit } = useForm({
        defaultValues: {
            [FORM.CARD_NUMBER]: "",
            [FORM.CARDHOLDER_NAME]: "",
            [FORM.EXPIRY_DATE]: "",
            [FORM.CVC]: "",
        },
    });

    const addCard = useCallback(() => {
        navigation.reset({
            index: 0,
            routes: [{
                name: SCREENS.HOME
            }]
        })
    }, [navigation]);

    const focusExpiryDateInput = useCallback(() => {
        setFocus(FORM.EXPIRY_DATE);
    }, []);

    const focusCVCInput = useCallback(() => {
        setFocus(FORM.CVC);
    }, []);

    const focusCardholderNameInput = useCallback(() => {
        setFocus(FORM.CARDHOLDER_NAME);
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps={"handled"}>
            <TPTextInput
                control={control}
                name={FORM.CARD_NUMBER}
                rules={{
                    required: true,
                }}
                onChangeText={(value) => setValue(FORM.CARD_NUMBER, formatCardNumber(value))}
                label={"Card number"}
                placeholder={"0000 0000 0000 0000"}
                keyboardType={"number-pad"}
                maxLength={19}
                returnKeyType={"next"}
                blurOnSubmit={false}
                onSubmitEditing={focusExpiryDateInput}
            />
            <View style={styles.expiryDateAndCVC}>
                <View style={styles.halfInputWrapper}>
                    <TPTextInput
                        control={control}
                        name={FORM.EXPIRY_DATE}
                        rules={{
                            required: true,
                        }}
                        label={"Expiry date"}
                        placeholder={"MM/YY"}
                        keyboardType={"number-pad"}
                        maxLength={5}
                        returnKeyType={"next"}
                        blurOnSubmit={false}
                        onSubmitEditing={focusCVCInput}
                    />
                </View>
                <View style={styles.halfInputWrapper}>
                    <TPTextInput
                        control={control}
                        name={FORM.CVC}
                        rules={{
                            required: true,
                        }}
                        label={"CVC/CVV"}
                        keyboardType={"number-pad"}
                        maxLength={3}
                        returnKeyType={"next"}
                        blurOnSubmit={false}
                        secureTextEntry={true}
                        onSubmitEditing={focusCardholderNameInput}
                    />
                </View>
            </View>
            <TPTextInput
                control={control}
                name={FORM.CARDHOLDER_NAME}
                rules={{
                    required: true,
                }}
                label={"Cardholder name"}
                placeholder={"Enter cardholder's full name"}
                autoComplete={"name"}
                autoCapitalize={"words"}
                returnKeyType={"next"}
                blurOnSubmit={false}
            />
            <Button mode={"contained"} onPress={handleSubmit(addCard)}>
                Add card
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flexGrow: 1,
        padding: 20,
        justifyContent: "center",
    },
    expiryDateAndCVC: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    halfInputWrapper: {
        flex: 0.45,
    },
});

export default AddCreditCardScreen;
