import React, { useCallback } from "react";
import { ColorValue, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { SCREENS } from "../navigation/SCREENS";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export interface Feature {
    title: string;
    backgroundColor: ColorValue;
    icon: any;
    screen: SCREENS
}

interface Props {
    title: string;
    backgroundColor: ColorValue;
    icon: any;
    screen: SCREENS
}

const FeatureCard = ({ title, backgroundColor = "black", icon, screen }: Props) => {
    const { roundness } = useTheme();
    const navigation = useNavigation<any>();

    const goToScreen = useCallback(() => {
        navigation.navigate(screen);
    }, [navigation, screen]);

    return (
        <TouchableOpacity style={[styles.card, { borderRadius: roundness, backgroundColor }]} onPress={goToScreen}>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    {icon({color: "white", size: 50, style: styles.icon})}
                </View>
                <Text style={styles.title} numberOfLines={2}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        aspectRatio: 1,
        margin: "2%",
        width: "46%",
        elevation: 4,
        overflow: "hidden",
        padding: 8,
    },
    content: {
        flex: 1,
    },
    iconContainer: {
        flex: 2,
        justifyContent: "flex-end",
        alignItems: "center",
        // backgroundColor: "red"
    },
    icon: {
        marginBottom: 10
    },
    title: {
        flex: 1,
        color: "white",
        paddingHorizontal: 6,
        fontWeight: "bold",
        textAlignVertical: "center",
        fontSize: 18,
        // backgroundColor: "green"
    },
});

export default FeatureCard;
