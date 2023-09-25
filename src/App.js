import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import AppContainer from "./appcontainer";
import { Provider } from "react-redux";
import store from "./reduxStore/store";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
