import React, { useState } from "react";
import { WiMoonAltFirstQuarter, WiMoonAltThirdQuarter } from "react-icons/wi";

import { Box, Grid, Header } from "..";

import {
  Container,
  LogoBox,
  StyledDropDown,
  StyledInput,
  StyledThemeSwitcher,
} from "./Layout.styled";
import { StyledAvatar } from "../../styles/index.styled";
import Emoji from "../emoji/Emoji";
import { VscGithub } from "react-icons/vsc";

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
      <Header title="">
        <Grid columns={[2, "1fr 2fr"]} sx={{ position: "relative" }}>
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
            {/* react icons GithubIcon */}
            <a href="https://github.com/kuisoko/tangojs">
              <VscGithub />
            </a>
          </Box>
        </Grid>
      </Header>
      <DropDownMenu show={showDropDown}>
        <a href="/docs">Docs</a>
        <a href="/register">Register</a>
      </DropDownMenu>
      <>{children}</>
    </Container>
  );
};

export default Layout;
