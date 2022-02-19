import React from "react";
import { BrowserRouter } from "react-router-dom";

import MainLayout from "Layouts/MainLayout/MainLayout";
import GlobalModalProvider from "HOC/GlobalModalProvider";
import GlobalThemeProvider from "./HOC/GlobalThemeProvider";
import GlobalStoreProvider from "./HOC/GlobalStoreProvider";

class App extends React.Component {
  render () {
    return (
      <GlobalStoreProvider>
        <BrowserRouter>
          <GlobalThemeProvider>
            <GlobalModalProvider>
              <MainLayout/>
            </GlobalModalProvider>
          </GlobalThemeProvider>
        </BrowserRouter>
      </GlobalStoreProvider>
    )
  }
}

export default App;