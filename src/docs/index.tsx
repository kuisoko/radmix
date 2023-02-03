import React from "react";


import {
  StyledDropDown,
} from "../components/layout/Layout.styled";

import styled from "styled-components";

export interface IDropDownMenu {
  children: React.ReactNode;
  show: boolean;
}

export interface ILayout {
  children?: React.ReactNode;
  toggleTheme?: (theme: string) => void;
  currentTheme?: string;
}

export const StyledGitIcon = styled.a`
  color: ${({ theme }) => theme.colors.nav};
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 100%;
  width: 100%;
`;

const DropDownMenu = ({ children, show, ...restProps }: IDropDownMenu) => {
  return (
    <StyledDropDown {...restProps} show={show}>
      {children}
    </StyledDropDown>
  );
};

const DocsPage = () => {

  return (
    <div>
        <h1>Docs</h1>
    </div>
  );
};

export default DocsPage;
