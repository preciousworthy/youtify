import "./App.css";
import Students from "./components/students";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Header from "./components/header";
import News from "./pages/news";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
      {/* <Students /> */}
    </div>
  );
}

export default App;
