import "./App.css";
import { useContext } from "react";

import AppState from "./core/context/AppState";
import NytCont from "./components/NytCont";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <AppState>
      <div className="App">
        {/* NYT items */}
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />

              <NytCont />
            </Route>

            <Route exact path="/:sid">
              <Header />
              <NytCont />
            </Route>
          </Switch>
        </Router>
      </div>
    </AppState>
  );
};

export default App;
