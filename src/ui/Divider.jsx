import React from "react";
import styled from "styled-components";

const StyledDivider = styled.hr`
  display: block;
  height: 2px;
  width: 100%;
  max-width: calc(100% - var(--spacing-400));
  margin-left: auto;
  margin-right: auto;
  background-color: var(--super-gray-300);
`;

export const Divider = ({ className }) => {
  return <StyledDivider className={className} />;
};
