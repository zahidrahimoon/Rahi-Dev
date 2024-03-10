# Rahi Dev

A simple landing page built with React and Material UI that looks like Instagram.

## Features

- Basic components: Navbar ,Sidebar,Feed, Rightbar
- Material UI components
- Dark and light theme support
- Fully responsive design
- Interactive components

## Getting Started

To get started, simply clone the repository and install the dependencies.

```bash
git clone [https://github.com/yourusername/InstaLandingPage.git](https://github.com/zahidrahimoon/InstaGood.git)
cd Rahi Dev
npm install
```

## Theme

The InstaLandingPage supports both dark and light themes. The theme can be changed by clicking the moon icon in the top right corner of the page.

## Responsive Design

The InstaLandingPage is fully responsive and includes media queries to ensure that it looks great on all devices.

## Project Demo

Check out the project demo [here](https://frolicking-gumption-d1e8e1.netlify.app).

## Components

The project consists of the following components:

- **Sidebar**: Contains the theme switcher and social media links.
- **Feed**: Displays the main content of the landing page.
- **Rightbar**: Displays additional content or information.

## Usage

To run the project, use the following command:

```bash
npm start
```

## Code Example

```jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";

const App = () => {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );  
};

export default App;
```
