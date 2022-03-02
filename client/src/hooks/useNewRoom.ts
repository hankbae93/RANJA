import { useEffect, useRef, useState } from 'react';
import axios from '../axios';

const useNewRoom = () => {
  const createRoom = async (username: string, max?: number): Promise<string> => {
    try {
      const { data } = await axios.post('/room', { username, max });
      return data;
    } catch (err) {
      console.log(err);
      return '실패';
    }
  };

  return createRoom;
};

export default useNewRoom;
