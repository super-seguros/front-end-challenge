import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  padding-left: var(--spacing-600);
  padding-right: var(--spacing-600);

  text-align: center;
  color: var(--white-100);
  font-family: var(--font-family-body);
  font-weight: 600;
  font-size: 16px;
  line-height: 1;

  border: 0;
  outline: 0;
  border-radius: 24px;
  height: 48px;

  background-color: var(--super-pink-500);
  cursor: pointer;

  transition: background-color 120ms ease-in-out;

  &:hover {
    background-color: var(--super-pink-700);
  }
`;

export const Button = ({children, className, onClick}) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
}