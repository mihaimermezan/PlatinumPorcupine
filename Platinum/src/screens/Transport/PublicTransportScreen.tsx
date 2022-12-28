import React, { useCallback } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import PublicTransportTicket, { PublicTransportTicketProps } from "../../componets/PublicTransportTicket";
import { useScreenHeader } from "navigation/ScreenHeader";

const TICKETS = [
    {
        title: "60 minutes ticket",
        price: 4,
        unit: "RON",
    },
    {
        title: "1 day ticket",
        price: 10,
        unit: "RON",
    },
];

const PublicTransportScreen = () => {

    useScreenHeader({
        headerTitle: "Public transport"
    }, []);

    const renderItem = useCallback(({ item }: ListRenderItemInfo<PublicTransportTicketProps>) => {
        return (
            <PublicTransportTicket {...item} />
        );
    }, []);

    return (
        <FlatList
            data={TICKETS}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
        />
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        padding: "4%"
    }
});

export default PublicTransportScreen;
