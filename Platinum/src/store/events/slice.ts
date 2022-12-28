import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Event } from "./types";

const EVENTS = [
    {
        title: "Chickens presentation",
        cover: "https://i.ytimg.com/vi/93VnfdBgn1M/maxresdefault.jpg",
        date: "123123123",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        title: "Party UVT",
        cover: "https://www.partymixtv.ro/wp-content/uploads/2020/01/party-mix-grup.jpg",
        date: "12312321",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
];

interface EventsState {
    events: Event[];
}

const initialState: EventsState = {
    events: [...EVENTS, ...EVENTS, ...EVENTS, ...EVENTS],
};

export const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        setEvents: (state, action: PayloadAction<Event[]>) => {
            state.events = action.payload;
        },
        loadMoreEvents: (state) => {
            state.events.push(...EVENTS, ...EVENTS);
        },
    },
});


export const eventsReducer = eventsSlice.reducer;
export const eventsActions = eventsSlice.actions;
