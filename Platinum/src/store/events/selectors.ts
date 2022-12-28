import { RootState } from "../index";

const selectAllEvents = (state: RootState) => state.events.events;

export const eventsSelectors = {
    selectAllEvents,
};
