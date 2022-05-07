import React from 'react';
import styled from "styled-components";

const StyledTitle = styled.h1`
  display: block;
  width: 100%;
  font-family: var(--font-family-title);
  font-size: 24px;
  font-weight: 600;
  color: #15135b;
  line-height: 1.25;
  text-align: center;
  cursor: default;
`;

export const Title = ({title}) => {
  return <StyledTitle>{title}</StyledTitle>
}