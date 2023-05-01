import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./seens/global/Topbar";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./seens/dashbord";
import Sidebarr from "./seens/global/Sidebar";
import Team from "./seens/team/index";
import Contacts from "./seens/contact/index";
import Invoice from "./seens/invoice/index";
import Form from "./seens/form/index";
import FAQ from "./seens/faq/index";
import Bar from "./seens/bar/index";
import Pie from "./seens/pie/index";
import Line from "./seens/line";
import Geo from "./seens/geo";
import ScreenNotSupport from "./components/ScreenNotSupport";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [theme, colorMode] = useMode();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {width > 1024 ? (
        <ProSidebarProvider>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                <Sidebarr />
                <main className="content">
                  <Topbar />
                  <Routes>
                    <Route path={"/"} element={<Dashbord />} />
                    <Route path={"/team"} element={<Team />} />
                    <Route path={"/contacts"} element={<Contacts />} />
                    <Route path={"/Invoice"} element={<Invoice />} />
                    <Route path={"/form"} element={<Form />} />
                    <Route path={"/faq"} element={<FAQ />} />
                    <Route path={"/bar"} element={<Bar />} />
                    <Route path={"/pie"} element={<Pie />} />
                    <Route path={"/line"} element={<Line />} />
                    <Route path={"/geo"} element={<Geo />} />
                  </Routes>
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
        </ProSidebarProvider>
      ) : (
        <ScreenNotSupport />
      )}
    </>
  );
}

export default App;

