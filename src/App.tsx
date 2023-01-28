import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

import { theme } from "./themes";
import { Box, Layout } from "./components";

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
          <Box sx={{ p: "1rem" }}>
            <h1>Styled Components</h1>
            <p>
              This is a simple example of how to use styled components in a
              React app.
            </p>
          </Box>
        </Layout>
      </ThemePreferenceContext.Provider>
    </ThemeProvider>
  );
};

export default App;
