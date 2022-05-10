import React from 'react';
import styled from "styled-components";

const StyledTag = styled.button`
  display: inline-block;
  border: 0;
  padding: var(--spacing-300) var(--spacing-400);
  font-family: var(--font-family-body);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: var(--white-100);
  background-color: var(--super-green-500);
  border-radius: 4px;
  user-select: none;
`;

export const Tag = ({children, className}) => {
  return (
    <StyledTag className={className}>
      {children}
    </StyledTag>
  );
}