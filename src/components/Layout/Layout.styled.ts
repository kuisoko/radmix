import styled from "styled-components";

import * as theme from "../../themes";
import { Block } from "../../styles/index.styled";
import { Input } from "theme-ui";

export interface ILogoBox {
  studio?: boolean;
}

export interface IDropDown {
  show?: boolean;
}

export interface IStyledDropDown {
  show?: boolean;
}

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme: { colors } }) => colors.background};
  color: ${({ theme: { colors } }) => colors.text};
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const LogoBox = styled(Block)`
  display: flex;
`;

export const StyledDropDown = styled.div<IDropDown>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5rem;
  right: 1rem;
  z-index: ${theme.zIndices.nav};
  background-color: ${({ theme: { colors } }) => colors.background};
  box-shadow: ${({ theme: { colors } }) =>
    colors.boxShadow + " 0px 0px 3px 0px"};
  border-radius: 0.5rem;
  padding: ${({ show }) => (show ? "1rem 0" : "none")};
  width: 200px;
  height: ${({ show }) => (show ? "auto" : "0")};
  overflow: hidden;
  transition: height 0.5s ease-in-out;

  a {
    color: ${({ theme: { colors } }) => colors.nav};
    text-decoration: none;
    padding: 0.5rem 0;
    text-align: center;
    border: 1px solid ${({ theme: { colors } }) => colors.background};
    width: 90%;

    &:hover {
      color: ${({ theme: { colors } }) => colors.navHover};
      background-color: ${({ theme: { colors } }) => colors.background};
      border: 1px solid ${({ theme: { colors } }) => colors.border};
    }
  }
`;

export const StyledInput = styled(Input)`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0 10px;
  font-size: 14px;
  color: #fff;

  &:focus: {
    outline: none;
    border: 1px solid #fff;
  }
`;

export const StyledThemeSwitcher = styled.div`
  background-color: ${({ theme: { colors } }) => colors.background};
  padding-right: 1rem;
  cursor: pointer;

  svg {
    border: 1px solid ${({ theme: { colors } }) => colors.border};
    color: ${({ theme: { colors } }) => colors.text};
    border-radius: 50%;
    padding: 0.5rem;
  }
`;

export const StyledGitIcon = styled.a`
  color: ${({ theme }) => theme.colors.nav};
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 20vh;
  width: 100%;
`;