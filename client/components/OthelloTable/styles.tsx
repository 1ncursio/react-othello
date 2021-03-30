import styled from '@emotion/styled';

export const Row = styled.div`
  display: flex;
`;

export const Item = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background-color: #45925d;
  border: 2px solid #37764b;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #5ea875;
  }
`;
