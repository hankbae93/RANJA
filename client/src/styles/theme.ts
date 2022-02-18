import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  fontSizes: {
    logo: '40px',
    subTitle: '24px',
    titleSize: '20px',
    txt: '16px',
    subTxtSize: '14px',
  },
  colors: {
    bgColor: '#fff',
    bgActiveColor: '#C8E9FE',
    txtColor: '#1A2B41',
    titleLineColor: '#F7F7F8',
    subTxtColor: '#CDD1D6',
    subTitleColor: '#B3B9C0',
    strongTxtColor: '#1051AD',
    eventTxtColor: '#60C0FC',
    navTxtColor: '#9CB7DC',
    navActiveTxtColor: '#1252AE',
  },
};

const darkTheme: DefaultTheme = {
  colors: {},
  fontSizes: {},
};

export { theme, darkTheme };
