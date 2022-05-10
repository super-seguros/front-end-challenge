import React from "react";
import styled from "styled-components";

import { Icon } from "ui/Icon";

const StyledTopbar = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white-100);
  border-bottom: 1px solid var(--white-300); // decided to use border instead of shadow
  height: 52px;
  font-family: var(--font-family-body);
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  color: var(--super-gray-800);
  cursor: default;
  user-select: none;

  button {
    display: inline-block;
    padding: 16px 18px;
    background-color: transparent;
    border: none;
    outline: none;
    font-family: var(--font-family-body);
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    height: 52px;
    color: var(--super-pink-500);
    cursor: pointer;

    &:hover {
      background-color: var(--white-300);
    }

    &:first-child {
      border-right: 1px solid var(--white-300);
    }

    &:last-child {
      border-left: 1px solid var(--white-300);
    }

    i {
      margin-right: var(--spacing-400);
    }
  }
`;

export const Topbar = () => {
  return (
    <StyledTopbar>
      <button>
        <Icon icon="arrow-left" />
        Atras
      </button>
      <p>Cotización</p>
      <button>Ayuda</button>
    </StyledTopbar>
  );
};
