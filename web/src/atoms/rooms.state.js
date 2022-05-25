import {selector} from 'recoil';

export const roomsSelector = selector({
  key: 'roomsSelector',
  get: () => {
    return [
      {
        title: 'Rooms 1',
        img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&dl=ralph-ravi-kayden-FqqiAvJejto-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        desc: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis congue justo, elementum ut quisque velit aenean viverra.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis congue justo, elementum ut quisque velit aenean viverra.',
        ],
        type: 'Double bed',
        rate: 350,
      },
      {
        title: 'Rooms 2',
        img: 'https://unsplash.com/photos/f7h2nTvEknM/download?force=true',
        desc: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis congue justo, elementum ut quisque velit aenean viverra.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis congue justo, elementum ut quisque velit aenean viverra.',
        ],
        type: 'Single bed',
        rate: 250,
      },
      {
        title: 'Rooms 3',
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
