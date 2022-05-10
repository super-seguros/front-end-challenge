import React from 'react';

export const Icon = ({icon, className}) => {
  return <i className={`fa-solid fa-${icon} ${className ? className : ''}`}></i>;
}
