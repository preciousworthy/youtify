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
  const { user } = useAuth0();
  console.log(user)

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
      {!user ? <span>Welcome, please log in!</span> : <span>Hello <Link to="/profile">{user.name}</Link></span> }
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
     <Footer />
    </div>
  );
}

export default App;
