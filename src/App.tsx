import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

import { theme } from "./themes";
import { Layout } from "./components";
import DocsPage from "./docs";

export const ThemePreferenceContext = createContext(null);

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  return (
    <ThemeProvider
      theme={{ ...theme, colors: theme.colors.modes[currentTheme] }}
    >
      <GlobalStyles />
      <ThemePreferenceContext.Provider
        value={{ currentTheme, setCurrentTheme }}
      >
        <Layout>
            <DocsPage />
        </Layout>
      </ThemePreferenceContext.Provider>
    </ThemeProvider>
  );
};

export default App;
