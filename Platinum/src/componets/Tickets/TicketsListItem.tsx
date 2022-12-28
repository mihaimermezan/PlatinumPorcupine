import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Card, Surface, Text } from "react-native-paper";
import { Ticket } from "api/generated";

type Props = {
    ticket: Ticket
}

const TICKETS_COLORS: { [key: string]: string } = {
    transport: "#f56464",
    event: "#4fb267",
};

const getTicketColor = (ticketType: string) => {
    if (TICKETS_COLORS[ticketType]) {
        return TICKETS_COLORS[ticketType];
    }
    return "black";
};

const TicketsListItem = ({ ticket }: Props) => {

    const backgroundColor = getTicketColor(ticket.type);

    return (
        <TouchableOpacity style={[styles.touchableOpacity, {backgroundColor}]}>
            <Card.Title title={ticket.type === "transport" ? "Transport" : "Event"} titleStyle={styles.title}/>
            <Card.Content>
                <Text style={styles.bodyText}>
                    {
                        ticket.type === "transport" && "1 hourTicket"
                    }
                    {
                        ticket.type === "event" && "event name and description"
                    }
                </Text>
            </Card.Content>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchableOpacity: {
        marginVertical: 10,
        borderRadius: 12,
        paddingBottom: 10
    },
    title: {
        color: "white",
    },
    bodyText: {
        color: "white",
    }
});

export default TicketsListItem;
