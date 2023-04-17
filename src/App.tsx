import React from "react";
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
            <Route path="*" element={<Test/>} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

const Test = () => {
  return <div>Time to code.</div>;
};

export default App;
