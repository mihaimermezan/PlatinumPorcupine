import React, { useCallback } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import TicketsListItem from "componets/Tickets/TicketsListItem";
import { Ticket } from "api/generated";

const TICKETS: Ticket[] = [
    {
        id: "ticket-1",
        type: "transport",
        qrCode: "default",
        validFrom: "",
        validUntil: "",
    },
    {
        id: "ticket-2",
        type: "transport",
        qrCode: "default",
        validFrom: "",
        validUntil: "",
    },
    {
        id: "ticket-3",
        type: "event",
        qrCode: "default",
        validFrom: "",
        validUntil: "",
    },
];

const TicketsListScreen = () => {

    const renderItem = useCallback(({ item }: ListRenderItemInfo<Ticket>) => {
        return <TicketsListItem ticket={item} />;
    }, []);

    const keyExtractor = useCallback((item: Ticket) => item.id, []);

    return (
        <FlatList
            data={TICKETS}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            contentContainerStyle={styles.contentContainer}
        />
    );
};

const styles = StyleSheet.create({
   contentContainer: {
       padding: 20
   }
});

export default TicketsListScreen;
