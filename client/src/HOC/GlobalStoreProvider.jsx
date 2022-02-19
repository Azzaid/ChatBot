import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import {store, persistor} from "store/initStore";


const GlobalStoreProvider = (props) => {

  return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          {props.children}
        </PersistGate>
      </Provider>
    )
}

export default GlobalStoreProvider