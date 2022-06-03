import {selector} from 'recoil';

export const roomsSelector = selector({
  key: 'roomsSelector',
  get: () => {
    return [
      {
        id: 'room-1',
        title: 'Rooms First',
        img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&dl=ralph-ravi-kayden-FqqiAvJejto-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        desc: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis congue justo, elementum ut quisque velit aenean viverra.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis congue justo, elementum ut quisque velit aenean viverra.',
        ],
        type: 'Double bed',
        rate: 350,
      },
      {
        id: 'room-2',
        title: 'Rooms Two',
        img: 'https://unsplash.com/photos/f7h2nTvEknM/download?force=true',
        desc: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis congue justo, elementum ut quisque velit aenean viverra.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis congue justo, elementum ut quisque velit aenean viverra.',
        ],
        type: 'Single bed',
        rate: 250,
      },
      {
        id: 'room-3',
        title: 'Rooms Three',
        img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&dl=ralph-ravi-kayden-FqqiAvJejto-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        desc: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis congue justo, elementum ut quisque velit aenean viverra.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis congue justo, elementum ut quisque velit aenean viverra.',
        ],
        type: 'Double bed',
        rate: 300,
      },
      {
        id: 'room-4',
        title: 'Rooms Four',
        img: 'https://unsplash.com/photos/iAftdIcgpFc/download?force=true',
        desc: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis congue justo, elementum ut quisque velit aenean viverra.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis congue justo, elementum ut quisque velit aenean viverra.',
        ],
        type: 'Single bed',
        rate: 280,
      },
    ];
  },
});
