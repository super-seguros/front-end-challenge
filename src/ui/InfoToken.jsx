import React from 'react';
import styled from "styled-components";

const SyledInfoToken = styled.div`
  font-weight: 600;
  font-size: 20px;

  h4 {
    margin: 0;
    font-family: var(--font-family-title);
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    color: #15135b;
    cursor: default;
  }
  p {
    margin: 8px 0 0;
    font-family: var(--font-family-body);
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
    color: #e21383;
    cursor: default;
  }
`;

export const InfoToken = ({label, value}) => {
  return (
    <SyledInfoToken>
      <h4>{label}</h4>
      <p>{value}</p>
    </SyledInfoToken>
  );
}