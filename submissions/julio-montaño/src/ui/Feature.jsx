import React from "react";
import styled from "styled-components";

import { Icon } from "ui/Icon";
import { Title } from "ui/Title";
import { Paragraph } from "ui/Paragraph";

const StyledFeature = styled.div`
  color: var(--super-gray-800);
`;

export const Feature = ({ title, description, icon, className }) => {
  return (
    <StyledFeature className={`flex grid-cols-2 ${className ? className : ""}`}>
      {icon && <Icon icon={icon} className="flex-initial mt-0.5" />}
      <div className="ml-2 mb-6">
        <Title level={3} left>
          {title}
        </Title>
        <Paragraph className="mt-1">{description}</Paragraph>
      </div>
    </StyledFeature>
  );
};

export const Features = styled.div`
  display: block;
  padding: var(--spacing-600);
  background-color: var(--white-100);
  border: 2px solid var(--white-300);
  box-shadow: 0px 2px 2px var(--white-200);
  border-radius: 12px;
`;
