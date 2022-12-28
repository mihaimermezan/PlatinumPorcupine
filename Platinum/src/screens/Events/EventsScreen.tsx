import React, { useCallback } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import EventCard from "../../componets/EventCard";
import { Event } from "../../store/events/types";
import { useSelector } from "react-redux";
import { eventsSelectors } from "../../store/events/selectors";


const EventsScreen = () => {
    const events = useSelector(eventsSelectors.selectAllEvents);
    // const dispatch = useDispatch();

    const renderEvent = useCallback(({ item }: ListRenderItemInfo<Event>) => {
        return (
            <EventCard event={item} />
        );
    }, []);

    // const loadMoreEvents = useCallback(() => {
    //     dispatch(eventsActions.loadMoreEvents());
    // }, [dispatch]);

    return (
        <FlatList
            data={events}
            renderItem={renderEvent}
            contentContainerStyle={styles.contentContainer}
            // onEndReachedThreshold={0.5}
            // onEndReached={loadMoreEvents}
        />
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        padding: "4%",
    },
});

export default EventsScreen;
