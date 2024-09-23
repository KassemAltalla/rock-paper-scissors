import { useState } from "react";
import "./App.css";
import GameSpace from "./Components/GameSpace/GameSpace";
import Rules from "./Components/Rules/Rules";
import Title from "./Components/Title/Title";

function App() {
  const [rulesScreen, setRulesScreen] = useState(false);
  const toggleRuleScreen = () => {
    setRulesScreen(!rulesScreen);
  };
  return (
    <div className="App">
      <Title />
      <GameSpace />
      <div>
        <button onClick={toggleRuleScreen}>Rules</button>
      </div>
      <Rules dis={rulesScreen} />
      <div
        className="Close"
        style={{ display: rulesScreen ? "block" : "none" }}
        onClick={toggleRuleScreen}
      >
        Close
      </div>
    </div>
  );
}

export default App;
