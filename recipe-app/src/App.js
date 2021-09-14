import './App.css';
import ControlPanel from "./ControlPanel";
import ContentPanel from "./ContentPanel";

function App() {
  return (
    <div className="App">
      <h1>Recipe App</h1>
      <ControlPanel/>
      <ContentPanel/>
    </div>
  );
}

export default App;
