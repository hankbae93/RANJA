import styled from 'styled-components';

const K_WIDTH = 40;
const K_HEIGHT = 40;

export const MarkerContainer = styled.div`
  position: 'absolute';
  width: ${K_WIDTH};
  height: K_HEIGHT;
  left: -${K_WIDTH} / 2;
  top: -${K_HEIGHT} / 2;

  border: '5px solid #f44336';
  border-radius: K_HEIGHT;
  background-color: 'white';
  text-align: 'center';
  color: '#3f51b5';
  font-size: 16;
  font-weight: 'bold';
  padding: 4;
`;
