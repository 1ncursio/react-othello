import styled from '@emotion/styled';

export const Row = styled.div`
  display: flex;
`;

export const Item = styled.div`
  width: 50px;
  height: 50px;
  background-color: #2eae52;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShowCanPut = styled.div`
  width: 20%;
  height: 20%;
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.8);
  box-shadow: 0 0 5px red;
`;

interface Props {
  item: number;
}

export const Stone = styled.div<Props>`
  width: inherit;
  height: inherit;
  border-radius: 50%;
  background-color: ${({ item }) => (item === 1 ? 'black' : 'white')};
`;
