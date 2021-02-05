import "./App.css";
import AppState from "./core/context/AppState";
import NYT from "./NYT.jsx";
import NytCont from "./components/NytCont";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <AppState>
      <div className="App">
        {/* NYT Logo */}
        <header style={{ height: "15vh" }}>
          <NYT style={{ height: "90%", marginTop: 10 }} />
        </header>

        {/* NYT items */}
        <Router>
          <Switch>
            <Route exact path="/">
              <NytCont />
            </Route>

            <Route exact path="/:sid">
              <NytCont />
            </Route>
          </Switch>
        </Router>
      </div>
    </AppState>
  );
};

export default App;
