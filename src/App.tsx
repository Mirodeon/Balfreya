import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import useResponsive from "./utils/useResponsive";
import Header from "./components/header/Header";
import { Logout, SvgToJSON, UserHub } from "./pages";
import Slide from "./components/slider/Slide";
import { data as dataImg } from "./img";
import { Factory, LayoutContainer, LayoutGrid } from "./components/factory";
import dataNav from "./components/header/nav.json";
import dataNavList from "./components/header/navList.json"
import ChipMenu from "./components/menu/ChipMenu";
import Footer from "./components/footer/Footer";

function App() {
  const responsive = useResponsive({ breakWidth: 768, breakHeight: 600 });

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <Header
            responsive={responsive}
            main={true}
            title={"Balfreya"}
            dataNav={dataNav}
            dataNavList={dataNavList}
          />
          <ChipMenu
            responsive={responsive}
            dataNav={dataNav}
            dataNavList={dataNavList}
          />
          <Routes>
            <Route path="/user/*" element={<UserHub />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/svgtojson" element={<SvgToJSON />} />
            <Route
              path="/"
              element={
                <LayoutContainer>
                  <LayoutGrid gridTemplateAreas={""} title={"Balfreya - Slide"}>
                    <Slide
                      data={dataImg}
                      width={"100%"}
                      height={"100%"}
                      id={0}
                    />
                  </LayoutGrid>
                </LayoutContainer>
              }
            />
            <Route path="*" element={<Factory responsive={responsive} />} />
          </Routes>
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
