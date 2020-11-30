// import React
import React from "react";
// import React-router-dom / BrowseRouter as Router / Route / Switch
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Pages
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";

// App navigation with React Router
function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path={"/"}>
              <HomePage />
            </Route>
            <Route exact path={"/work"}>
              <WorkPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
