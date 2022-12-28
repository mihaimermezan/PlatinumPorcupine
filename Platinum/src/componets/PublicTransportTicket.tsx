import React, { useCallback } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "navigation/SCREENS";

export interface PublicTransportTicketProps {
    title: string;
    price: number;
    unit: string;
}

const PublicTransportTicket = ({ title, price, unit }: PublicTransportTicketProps) => {
    const { roundness } = useTheme();
    const navigation = useNavigation<any>();

    const goToBuyTicketScreen = useCallback(() => {
        navigation.navigate(SCREENS.ADD_CREDIT_CARD, { ticket: { title, price, unit } });
    }, [navigation]);

    return (
        <TouchableOpacity style={[styles.card, { borderRadius: roundness }]} onPress={goToBuyTicketScreen}>
            <View style={styles.content}>
                <MaterialCommunityIcons name={"bus"} color={"white"} size={50} style={styles.icon} />
                <View style={styles.titleAndPrice}>
                    <Text style={styles.title} numberOfLines={1}>
                        {title}
                    </Text>
                    <Text style={styles.price}>
                        {`${price} ${unit}`}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f56464",
        marginBottom: "4%",
        padding: 12,
        elevation: 4,
    },
    content: {
        flexDirection: "row",
    },
    icon: {
        marginRight: 10,
    },
    titleAndPrice: {
        justifyContent: "space-evenly",
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
    price: {
        color: "white",
        fontWeight: "bold",
    },
});

export default PublicTransportTicket;
