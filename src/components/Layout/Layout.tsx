import React, { useState } from "react";
import { WiMoonAltFirstQuarter, WiMoonAltThirdQuarter } from "react-icons/wi";

import { Box } from "..";

import {
  Container,
  LogoBox,
  StyledDropDown,
  StyledGitIcon,
  StyledHeader,
  StyledInput,
  StyledThemeSwitcher,
} from "./Layout.styled";

import Emoji from "../emoji/Emoji";
import { VscGithub } from "react-icons/vsc";
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

const DropDownMenu = ({ children, show, ...restProps }: IDropDownMenu) => {
  return (
    <StyledDropDown {...restProps} show={show}>
      {children}
    </StyledDropDown>
  );
};

const Layout = ({
  children,
  toggleTheme,
  currentTheme,
  ...restProps
}: ILayout) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <Container {...restProps}>
      <StyledHeader>
        <LogoBox>
          <Emoji symbol="🪅" size="64px" />
        </LogoBox>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <StyledInput placeholder="Search for components, ..." />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mr: "1.5rem",
            alignItems: "center",
          }}
        >
          <StyledThemeSwitcher>
            <a
              href="/#"
              onClick={() => {
                toggleTheme(currentTheme === "light" ? "dark" : "light");
                setShowDropDown(false);
              }}
            >
              {currentTheme === "light" ? (
                <WiMoonAltFirstQuarter size={20} />
              ) : (
                <WiMoonAltThirdQuarter size={20} />
              )}
            </a>
          </StyledThemeSwitcher>
          <StyledGitIcon href="https://github.com/kuisoko/radmix">
            <VscGithub />
          </StyledGitIcon>
        </Box>
      </StyledHeader>
      <DropDownMenu show={showDropDown}>
        <a href="/docs">Docs</a>
        <a href="/register">Register</a>
      </DropDownMenu>
      <>{children}</>
    </Container>
  );
};

export default Layout;
