import React, { useCallback } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import FeatureCard, { Feature } from "../../componets/FeatureCard";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SCREENS } from "navigation/SCREENS";

const FEATURES = [
    {
        title: "Transport",
        backgroundColor: "#f56464",
        icon: (props: any) => <MaterialCommunityIcons name={"bus"} {...props}/>,
        screen: SCREENS.PUBLIC_TRANSPORT
    },
    {
        title: "Food",
        backgroundColor: "#54BDD0",
        icon: (props: any) => <Ionicons name={"restaurant"} {...props} />,
        screen: SCREENS.MAP
    },
    {
        title: "Events",
        backgroundColor: "#4fb267",
        icon: (props: any) => <Entypo name={"ticket"} {...props} />,
        screen: SCREENS.EVENTS
    },
    {
        title: "Random experience",
        backgroundColor: "#7a51b7",
        icon: (props: any) => <FontAwesome5 name={"question"} {...props} />,
        screen: SCREENS.RANDOM_EXPERIENCE
    },
    {
        title: "Music",
        backgroundColor: "#ded360",
        icon: (props: any) => <Ionicons name={"musical-notes"} {...props} />,
        screen: SCREENS.PUBLIC_TRANSPORT
    },
];

const HomeScreen = () => {
    const renderItem = useCallback(({ item }: ListRenderItemInfo<Feature>) => {
        return (
            <FeatureCard {...item} />
        );
    }, []);

    return (
        <FlatList
            data={FEATURES}
            renderItem={renderItem}
            numColumns={2}
            contentContainerStyle={styles.contentContainer}
        />
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        padding: "2%",
    },
});

export default HomeScreen;
