import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <Routes>
            <Route path="*">
              <div>Time to code.</div>
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
