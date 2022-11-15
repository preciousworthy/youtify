import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/loading";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav-bar-auth";
import About from "./pages/about";
import Header from "./components/header";
import News from "./pages/news";
import Students from "./components/students";
import Profile from "./components/profile";
import Home from "./pages/home";


function App() {


  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Header />
      <div className="container flex-grow-1">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      {/* <Students /> */}
    </div>
  );
}

export default App;
