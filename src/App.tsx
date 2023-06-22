import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import useResponsive from "./utils/useResponsive";
import Header from "./components/header/Header";
import { Logout, SvgToJSON, UserHub } from "./pages";
import Slide from "./components/slider/Slide";
import { data as dataImg } from "./img";
import { Factory } from "./components/factory";
import dataNav from "./components/header/nav.json";
import Chip from "./components/menu/Chip";

function App() {
  const responsive = useResponsive();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <Header
            responsive={responsive}
            main={true}
            title={"Balfreya"}
            data={dataNav}
          />
          <Chip responsive={responsive} data={dataNav} />
          <Routes>
            <Route path="/user/*" element={<UserHub />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/svgtojson" element={<SvgToJSON />} />
            <Route
              path="/"
              element={
                <Slide
                  data={dataImg}
                  width={"80%"}
                  height={"calc(70vh - 112px)"}
                  id={0}
                  cssStyle={
                    "position: absolute; top: calc(50% + 28px); left: 50%; transform: translate(-50%, -50%);"
                  }
                />
              }
            />
            <Route path="*" element={<Factory responsive={responsive} />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
