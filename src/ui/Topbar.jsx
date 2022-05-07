import React from 'react';
import styled from "styled-components";

import { Icon } from 'ui/Icon'

const StyledTopbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 1px solid #e3e3e3;
  height: 52px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  color: #15135b;
  cursor: default;
  user-select: none;

  button {
    display: inline-block;
    padding: 16px 18px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    height: 52px;
    color: #e21383;
    cursor: pointer;

    &:hover {
      background-color: #e3e3e3;
    }

    &:first-child {
      border-right: 1px solid #e3e3e3;
    }

    &:last-child {
      border-left: 1px solid #e3e3e3;
    }
  }
`;

export const Topbar = () => {
  return (
    <StyledTopbar>
      <button><Icon icon="arrow-left" />Atras</button>
      <p>Cotización</p>
      <button>Ayuda</button>
    </StyledTopbar>
  );
}
