import logo from "./logo.svg";
import "./App.css";
import PlayerBoard from "./components/PlayerBoard/PlayerBoard";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <PlayerBoard></PlayerBoard>
      
    </div>
  );
}

export default App;
