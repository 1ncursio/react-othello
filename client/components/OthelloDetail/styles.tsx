import styled from '@emotion/styled';

export const Score = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 500;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #4e4e4e;
  color: #ffffff;
  border: none;
  border-radius: 0.8rem;
  padding: 0.8rem 1.6rem;
  outline: none;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #252525;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
