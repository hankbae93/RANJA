import { useNavigate } from 'react-router-dom';
import axios from '../axios';

const useNewRoom = () => {
  const navigate = useNavigate();
  const createRoom = async (username: string, max?: number): Promise<string> => {
    try {
      const { data } = await axios.post('/room', { username, max });
      return data;
    } catch (err) {
      console.log(err);
      return '실패';
    }
  };

  const chat = async (username: string, max?: number) => {
    try {
      const txt = await createRoom(username, max);
      console.log(txt);
      if (txt !== '실패') {
        navigate(`/chat/${txt}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { chat };
};

export default useNewRoom;
