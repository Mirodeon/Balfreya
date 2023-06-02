import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import useResponsive from "./utils/useResponsive";
import Header from "./components/header/Header";
import { Register, SvgToJSON } from "./pages";

function App() {
  const responsive = useResponsive();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <Header responsive={responsive} />
          <Routes>
            <Route path="/login" element={<SvgToJSON />} />
            <Route path="/register" element={<Register />} />
            <Route path="/svgtojson" element={<SvgToJSON />} />
            <Route path="*" element={<Test />} />
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
