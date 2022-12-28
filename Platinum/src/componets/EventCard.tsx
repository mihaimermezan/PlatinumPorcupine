import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Event } from "../store/events/types";

export interface EventCardProps {
    event: Event
}

const EventCard = ({event: { cover, title, date, description }}: EventCardProps) => {
    const { roundness } = useTheme();

    return (
        <TouchableOpacity style={[styles.card, { borderRadius: roundness }]}>
            <View style={styles.content}>
                <ImageBackground source={{ uri: cover }} style={styles.cover} resizeMode={"cover"} />
                <View style={styles.details}>
                    <View style={styles.dateRow}>
                        <Text style={styles.date}>
                            {new Date(date).toLocaleDateString()}
                        </Text>
                        <Text style={styles.dateSeparator}>
                            |
                        </Text>
                        <Text style={styles.date}>
                            16:00 to 4:00
                        </Text>
                    </View>
                    <View style={styles.titleAndDescription}>
                        <Text style={styles.title} numberOfLines={1}>
                            {title}
                        </Text>
                        <Text style={styles.description} numberOfLines={2}>
                            {description}
                        </Text>
                        <View style={styles.location}>
                            <Ionicons name={"location-sharp"} style={styles.locationIcon} color={"white"} size={18}/>
                            <Text style={styles.locationTitle}>
                                Piata Unirii
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    card: {
        backgroundColor: "#4fb267",
        elevation: 4,
        width: "100%",
        aspectRatio: 1.1,
        marginVertical: "2%",
        overflow: "hidden",
    },
    content: {
        flex: 1,
    },
    cover: {
        flex: 4,
    },
    details: {
        flex: 3,
    },
    dateRow: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        // backgroundColor: "red",
        // borderBottomWidth: 1,
        // borderColor: "white"
    },
    date: {
        fontWeight: "bold",
        color: "white",
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
    },
    dateSeparator: {
        fontWeight: "bold",
        color: "white",
    },
    titleAndDescription: {
        flex: 6,
        paddingHorizontal: 16,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
    },
    description: {
        color: "white",
    },
    location: {
        marginTop: 8,
        flexDirection: "row",
        alignItems: "center"
    },
    locationIcon: {},
    locationTitle: {
        fontWeight: "bold",
        color: "white",
        marginLeft: 4
    },
});

export default EventCard;
