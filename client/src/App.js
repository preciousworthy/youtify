import "./App.css";
import Students from "./components/students";
import SpotifyAuth from "./components/spotifyauth";

function App() {
  return (
    <div className="App">
      Hello from Techtonica
      <SpotifyAuth />
      <Students />
    </div>
  );
}

export default App;
