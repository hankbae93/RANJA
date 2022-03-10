import styled from 'styled-components';

export const CardList = styled.ul`
  max-height: 700px;
  overflow-y: scroll;
  padding: 5px 15px 500px 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* height: 100%; */
`;

export const Card = styled.li`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  width: 100%;
  height: 214px;
  padding: 22px;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 0px rgb(0 0 0 / 20%);
`;

export const CardImg = styled.img`
  width: 280px;
  height: 170px;
  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;
  object-position: center top;
`;

export const CardInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CardAddress = styled.p`
  margin-bottom: 15px;
  font-size: ${({ theme }) => theme.fontSizes.subTxtSize};
  color: ${({ theme }) => theme.colors.subTitleColor};
`;

export const CardName = styled.h3`
  margin-bottom: 25px;
  font-size: ${({ theme }) => theme.fontSizes.titleSize};
  color: ${({ theme }) => theme.colors.txtColor};
  line-height: 1.2;
`;

export const CardIntroduce = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.subTxtSize};
`;

export const CardBtns = styled.ul`
  display: flex;
  margin-top: auto;
  gap: 15px;
`;

export const CardButton = styled.li`
  border: 1px solid #ccc;
  cursor: pointer;
`;
