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

interface Props {
  item: number;
}

export const Stone = styled.div<Props>`
  width: inherit;
  height: inherit;
  border-radius: 50%;
  background-color: ${({ item }) => (item === 1 ? 'black' : 'white')};
`;
