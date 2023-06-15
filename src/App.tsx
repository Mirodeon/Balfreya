import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import useResponsive from "./utils/useResponsive";
import Header from "./components/header/Header";
import { SvgToJSON, UserHub } from "./pages";
import Logout from "./pages/Logout";
import Slide from "./pages/Slide";
import { data as dataImg } from "./img";
import Factory from "./components/factory/Factory";

function App() {
  const responsive = useResponsive();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <Header responsive={responsive} main={true} />
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
                  slideHeight={"calc(70vh - 112px)"}
                  cssStyle="margin-top: 112px;"
                />
              }
            />
            <Route path="*" element={<Factory />} />
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
