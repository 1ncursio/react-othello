import styled from '@emotion/styled';

export const Row = styled.div`
  display: flex;
`;

export const Item = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #2eae52;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Stone = styled.div<{ item: number }>`
  width: inherit;
  height: inherit;
  border-radius: 50%;
  background-color: ${({ item }) => (item === 1 ? 'black' : 'white')};
`;
