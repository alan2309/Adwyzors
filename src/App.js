import ThemeState from "../src/context/Theme/ThemeState";
import Assembler from "./Assembler";


function App() {
  return (
    <div className="App">
       <ThemeState>
        <Assembler />
      </ThemeState>
    </div>
  );
}

export default App;
