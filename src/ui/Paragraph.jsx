import React from 'react';
import styled from "styled-components";

const StyledParagraph = styled.p`
  display: block;
  width: 100%;
  font-family: var(--font-family-title);
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: var(--super-gray-800);
  cursor: default;

  &.center {
    text-align: center;
  }
`;

export const Paragraph = ({children, center, className}) => {
  return <StyledParagraph className={`${center ? 'center' : ''} ${className ? className : ''}`}>{children}</StyledParagraph>
}