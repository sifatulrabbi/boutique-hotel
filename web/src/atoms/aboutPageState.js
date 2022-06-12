import {atom} from "recoil";
// import {heroImg} from '../images';

export const aboutPictureState = atom({
  key: "aboutPictureState",
  default: 0,
});

export const aboutPicturesCollection = atom({
  key: "aboutPicturesKey",
  default: [
    "https://unsplash.com/photos/hHz4yrvxwlA/download?force=true",
    "https://unsplash.com/photos/hHz4yrvxwlA/download?force=true",
    "https://unsplash.com/photos/g39p1kDjvSY/download?force=true",
    "https://unsplash.com/photos/tVzyDSV84w8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8Z3Vlc3QlMjBob3VzZXxlbnwwfHx8fDE2NTQxMDQxNzQ&force=true",
    "https://unsplash.com/photos/tVzyDSV84w8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8Z3Vlc3QlMjBob3VzZXxlbnwwfHx8fDE2NTQxMDQxNzQ&force=true",
  ],
  // default: [heroImg, heroImg, heroImg, heroImg, heroImg],
});
