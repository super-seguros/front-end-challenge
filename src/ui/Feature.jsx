import React from 'react';
import styled from "styled-components";

const StyledFeature = styled.div`
  h4 {
    font-weight: 600;
    font-family: var(--font-family-title);
    font-size: 16px;
    line-height: 1.25;

    color: #15135b;
  }

  p {
    font-weight: 400;
    font-family: var(--font-family-body);
    font-size: 16px;
    line-height: 1.5;
    color: #15135b;
  }
`;

export const Feature = ({title, description}) => {
  return (
    <StyledFeature>
      <h4>{title}</h4>
      <p>{description}</p>
    </StyledFeature>
  );
}

export const Features = styled.div`
  display: block;
  padding: 16px;
  background: #ffffff;
  border: 2px solid #e3e3e3;
  box-shadow: 0px 2px 2px #ebebeb;
  border-radius: 12px;
`;