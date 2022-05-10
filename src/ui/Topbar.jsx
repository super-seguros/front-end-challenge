import React from "react";
import styled from "styled-components";

import { Icon } from "ui/Icon";

const HELP_URL =
  "https://wa.me/525585250354?text=%C2%A1Hola%21+Estoy+en+la+p%C3%A1gina+de+S%C3%BAper+y+tengo+una+pregunta.";
const MAIN_SITE_URL = "https://super.mx/";

const StyledTopbar = styled.div`
  display: flex;
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
      background-color: var(--white-200);
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

export const Topbar = ({ className }) => {
  return (
    <StyledTopbar className={className}>
      <button>
        <a href={MAIN_SITE_URL}>
          <Icon icon="arrow-left" />
          Atras
        </a>
      </button>
      <p>Cotización</p>
      <button>
        <a href={HELP_URL} target="_blank">
          Ayuda
        </a>
      </button>
    </StyledTopbar>
  );
};
