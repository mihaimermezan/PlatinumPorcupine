import React, { useCallback } from "react";
import { TextInput, HelperText } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { Control, Controller } from "react-hook-form";
import { UseControllerReturn } from "react-hook-form/dist/types/controller";
import { RegisterOptions } from "react-hook-form/dist/types/validator";

export interface TPTextInputProps extends React.ComponentProps<typeof TextInput> {
    control: any;
    name: string;
    rules: RegisterOptions;
}

const TPTextInput = ({ control, name, rules, mode="outlined", ...props }: TPTextInputProps) => {

    const render = useCallback(({ field, fieldState }: UseControllerReturn) => {
        return (
            <View>
                <TextInput
                    {...props}
                    ref={field.ref}
                    value={field.value}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                    mode={mode}
                />
                <HelperText type={"error"} visible={!!fieldState.error}>
                    {fieldState.error?.type}
                </HelperText>
            </View>
        );
    }, [props]);

    return (
        <Controller
            control={control}
            render={render}
            name={name}
            rules={rules}
        />
    );
};

const styles = StyleSheet.create({});

export default TPTextInput;
