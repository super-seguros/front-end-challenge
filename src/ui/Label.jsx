import React from "react";
import styled from "styled-components";

const StyledLabel = styled.div`
  font-family: var(--font-family-body);
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  color: var(--super-gray-800);
  cursor: default;
  user-select: none;
`;

export const Label = ({ children, className }) => {
  return <StyledLabel className={className}>{children}</StyledLabel>;
};
