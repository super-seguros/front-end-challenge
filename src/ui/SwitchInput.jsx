import React from 'react';
import styled from "styled-components";

const StyledSwitch = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e3e3e3;
  padding: 8px;
  border-radius: 8px;

  button {
    display: inline-flex;
    border-radius: 8px;
    flex: 1;
    padding-top: 8px;
    padding-bottom: 8px;
    border: none;
    outline: none;
    background-color: transparent;
    justify-content: center;
    font-family: var(--font-family-title);
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    color: #15135b;

    &.selected {
      background-color: #e21383;
      color: #ffffff;
    }
  }
`;

export const SwitchInput = ({label, options, selected, onChange}) => {
  return (
    <>
      {label}
      <StyledSwitch>
      {options.map(option => {
        const isSelected = selected.value === option.value;
        return <button className={`${isSelected ? 'selected' : ''}`}onClick={() => onChange(option)}>{option.label}</button>
      })}
      </StyledSwitch>
    </>
  )
}
