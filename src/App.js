import "./App.css";

import AppState from "./core/context/AppState";
import NytCont from "./components/NytCont";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import TopStories from "./components/TopStories";

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

            <Route exact path="/most/:sid">
              <Header />
              <NytCont />
            </Route>
            <Route exact path="/Top_Stories">
              <TopStories />
            </Route>
          </Switch>
        </Router>
      </div>
    </AppState>
  );
};

export default App;
