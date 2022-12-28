import React from "react";
import MapView, { Marker, Polygon } from "react-native-maps";
import { StyleSheet } from "react-native";

const OBJECTIVES = [
    {
        name: "Claudiu",
        location: {
            latitude: 46.09987124972821,
            longitude: 23.58723571639126,
        },
    },
];

const PARK_COORDINATES = [
    {
        latitude: 46.06807409858573,
        longitude: 23.56446130503093,
    },
    {
        latitude: 46.07040688713804,
        longitude: 23.565284820138086,
    },
    {
        latitude: 46.06880176003056,
        longitude: 23.567073775623104,
    },
];

const MapScreen = () => {

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 46.0616789,
                longitude: 23.5729834,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
            }}
        >
            {
                OBJECTIVES.map((objective) => (
                    <Marker coordinate={objective.location} title={objective.name} onPress={console.log} key={objective.location}/>
                ))
            }
            <Polygon
                coordinates={PARK_COORDINATES}
                fillColor={"rgba(118,236,41,0.47)"}
                onPress={console.log}
                tappable={true}
            />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});

export default MapScreen;
