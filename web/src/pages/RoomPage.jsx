import React from 'react';
import PageMain from '../components/PageMain';
import {useParams} from 'react-router-dom';

const RoomPage = () => {
  const {id} = useParams();

  return <PageMain>RoomPage</PageMain>;
};

export default RoomPage;
