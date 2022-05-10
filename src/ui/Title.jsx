import React from "react";
import styled from "styled-components";

// Map directly to preset sizes
const fontSize = {
  h1: "24px",
  h2: "20px",
  h3: "16px",
};

const lineHeight = {
  h1: 1.25,
  h2: 1.5,
  h3: 1.25,
};

const StyledTitle = styled.h1`
  display: block;
  width: 100%;
  font-family: var(--font-family-title);
  font-size: ${(props) => fontSize[props.as]};
  line-height: ${(props) => lineHeight[props.as]};
  font-weight: 600;
  color: var(--super-gray-800);
  text-align: center;
  cursor: default;

  &.left {
    text-align: left;
  }

  &.pink {
    color: var(--super-pink-500);
  }
`;

export const Title = ({ children, level = "1", left, pink, className }) => {
  return (
    <StyledTitle
      as={`h${level}`}
      className={`${left ? "left" : ""} ${className ? className : ""} ${
        pink ? "pink" : ""
      }`}
    >
      {children}
    </StyledTitle>
  );
};
