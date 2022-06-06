import {atom} from 'recoil';

export const startDateState = atom({
  key: 'startDateState',
  default: 0,
});

export const endDateState = atom({
  key: 'endDateState',
  default: 0,
});

export const totalSelectedDatesState = atom({
  key: 'totalSelectedDatesState',
  default: [],
});
