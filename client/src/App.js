import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/loading";
import { Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/nav-bar-auth";
import About from "./pages/about";
import Header from "./components/header";
import News from "./pages/news";
import Profile from "./components/profile";
import Home from "./pages/home";
import Footer from "./components/footer";


function App() {


  const { isLoading } = useAuth0();
  

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      
     <Footer />
    </div>
  );
}

export default App;
