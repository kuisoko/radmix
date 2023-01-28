import React from "react";
import styled from "styled-components";

export interface CollapseProps {
  children: React.ReactNode;
}

export const StyledCollapse = styled.div`
  display: flex;
`;

const Collapse = ({ children, ...restProps }: CollapseProps) => (
  <StyledCollapse {...restProps}>{children}</StyledCollapse>
);

export default Collapse
