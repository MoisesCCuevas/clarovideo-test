import { createSlice } from '@reduxjs/toolkit';
import { createDateFormat } from '../../utils/utils';
import { ActiveEvent } from '../../components/modals/modalEPG';

export const initialState = {
  activeModal: '',
  channels: [],
  entry: {},
  msg: 'wait',
  selectedEvent: {}
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setModalState: (state, { payload }) => {
      state.activeModal = payload
    },
    setDataFromApi: (state, { payload }) => {
      const { response } = payload;
      const { channels } = response;
      const newChannels = channels.map((channel: any) => {
        const newEvents = channel.events.map((event: any) => {
          return {
            ...event,
            date_begin: createDateFormat(event.date_begin),
            date_end: createDateFormat(event.date_end)
          }
        })
        return {
          ...channel,
          events: newEvents.sort((a : any, b: any) => a.date_begin - b.date_begin)
        }
      });
      state.channels = newChannels;
      state.entry = payload.entry;
      state.msg = payload.msg;
      state.selectedEvent = new ActiveEvent(newChannels[0].events[0]);
    },
    setSelectedEvent: (state, { payload }) => {
      state.selectedEvent = new ActiveEvent(payload);
    },
  },
})

export const { setModalState, setDataFromApi, setSelectedEvent } = mainSlice.actions

export default mainSlice.reducer;
