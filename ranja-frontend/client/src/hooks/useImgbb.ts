import axios from '../axios';

const useImgbb = () => {
  const getImg = async (imgUrl: string) => {
    try {
      await axios.get(imgUrl);
    } catch (err) {
      console.log(err);
    }
  };

  return { getImg };
};
