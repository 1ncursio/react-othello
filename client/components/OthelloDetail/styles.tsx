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
  border: 1px solid #4e4e4e;
  border-radius: 0.8rem;
  padding: 0.8rem 1.6rem;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #252525;
  }

  &:disabled {
    background-color: #ffffff;
    color: #8b8b8b;
  }

  &:disabled:hover {
    /* background-color: #f9f9f9; */
    cursor: not-allowed;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
