import "./App.css";
import Students from "./components/students";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          
          <Route path="/about" element={<About />} />
          
        </Routes>
      </div>
      <Students />
    </div>
  );
}

export default App;
