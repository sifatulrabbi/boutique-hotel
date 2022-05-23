import {atom} from 'recoil';

export const homePageState = atom({
  key: 'homePageState',
  default: {
    features: [
      {
        title: 'Free Wifi',
        icon: '',
      },
      {
        title: 'Free Parking',
        icon: '',
      },
      {
        title: 'Swimming Pool',
        icon: '',
      },
      {
        title: 'Dedicated Workspace',
        icon: '',
      },
    ],
    reviews: [
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis congue justo, elementum ut quisque velit aenean viverra.',
      },
      {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis congue justo, elementum ut quisque velit aenean viverra.',
      },
    ],
  },
});
