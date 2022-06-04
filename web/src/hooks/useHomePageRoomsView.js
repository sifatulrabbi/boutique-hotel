import {useRecoilState, useRecoilValue} from 'recoil';
import {roomsSelector, roomsViewIndex} from '../atoms';

export function useHomePageRoomView() {
  const [roomIndex, setRoomIndex] = useRecoilState(roomsViewIndex);
  const rooms = useRecoilValue(roomsSelector);

  /**
   * view the next room function
   */
  function nextRoom() {
    if (roomIndex === rooms.length - 1) {
      setRoomIndex(0);
    } else {
      setRoomIndex((prev) => prev + 1);
    }
  }

  /**
   * view the previous room function
   */
  function prevRoom() {
    if (roomIndex === 0) {
      setRoomIndex(rooms.length - 1);
    } else {
      setRoomIndex((prev) => prev - 1);
    }
  }

  return {nextRoom, prevRoom};
}
