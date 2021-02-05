import "./App.css";
import AppState from "./core/context/AppState";
import NYT from "./NYT.jsx";
import NytCont from "./components/NytCont";

const App = () => {
  return (
    <AppState>
      <div className="App">
        {/* NYT Logo */}
        <header style={{ height: "15vh" }}>
          <NYT style={{ height: "90%", marginTop: 10 }} />
        </header>
        {/* NYT Controller */}

        <div className="NytController"></div>
        {/* NYT items */}
        <NytCont />
      </div>
    </AppState>
  );
};

export default App;
