import React from "react";
import styled from "styled-components";

import { Label } from "ui/Label";

const StyledSwitch = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e3e3e3;
  margin-top: 8px;
  padding: 8px;
  border-radius: 8px;

  button {
    display: inline-flex;
    border-radius: 8px;
    flex: 1;
    padding-top: var(--spacing-400);
    padding-bottom: var(--spacing-400);
    border: none;
    outline: none;
    background-color: transparent;
    justify-content: center;
    font-family: var(--font-family-title);
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    color: var(--super-gray-500);
    cursor: pointer;

    transition: background-color 120ms, color 120ms ease-in-out;

    :not(&.selected):hover {
      background-color: var(--white-200);
    }

    &.selected {
      background-color: var(--super-pink-500);
      color: var(--white-100);
    }
  }
`;

export const SwitchInput = ({
  label,
  options,
  selected,
  onChange,
  className,
}) => {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <StyledSwitch>
        {options.map((option) => {
          const isSelected = selected.value === option.value;
          return (
            <button
              className={`${isSelected ? "selected" : ""}`}
              onClick={() => onChange(option)}
            >
              {option.label}
            </button>
          );
        })}
      </StyledSwitch>
    </div>
  );
};
