import mainSlice, { setModalState, setDataFromApi, setSelectedEvent, initialState } from '../../redux/reducers/mainSlice';

describe('Test reducers', () => {
  test('setModalState', () => {
    const action = setModalState('modalEPG');
    const expectedState = {...initialState, activeModal: 'modalEPG' };
    expect(mainSlice(initialState, action)).toEqual(expectedState);
  });

  test('setDataFromApi', () => {
    const data = {
      response: {
        channels: [
          {
            events: [
              {
                channel_id: '1',
                id: '1',
                date_begin: '2023/01/01 12:00:00',
                date_end: '2023/01/01 12:00:00',
                name: '',
                duration: '',
                description: ''
              },
              {
                channel_id: '2',
                id: '2',
                date_begin: '2023/01/01 12:00:00',
                date_end: '2023/01/01 12:00:00',
                name: '',
                duration: '',
                description: ''
              }
            ]
          }
        ]
      },
      entry: {},
      msg: 'OK'
    };
    const newChannels = [
      {
        events: [
          {
            channel_id: '1',
            id: '1',
            date_begin: 1672596000000,
            date_end: 1672596000000,
            name: '',
            duration: '',
            description: ''
          },
          {
            channel_id: '2',
            id: '2',
            date_begin: 1672596000000,
            date_end: 1672596000000,
            name: '',
            duration: '',
            description: ''
          }
        ]
      }
    ]
    const action = setDataFromApi(data);
    const expectedState = {
      ...initialState,
      channels: newChannels,
      selectedEvent: newChannels[0].events[0],
      entry: {},
      msg: 'OK'
    };
    expect(mainSlice(initialState, action)).toEqual(expectedState);
  });

  test('setSelectedEvent', () => {
    const event = {channel_id: '1', id: '1'};
    const action = setSelectedEvent(event);
    const expectedState = {...initialState, selectedEvent: event };
    expect(mainSlice(initialState, action)).toEqual(expectedState);
  });
});