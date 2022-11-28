import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/loading";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Header from "./components/header";
import News from "./pages/news";
import Profile from "./components/profile";
import Home from "./pages/home";
import { SpotifyLogin } from "./components/spotify-login";
import Playlist from "./pages/playlist";



function App() {


  const { isLoading } = useAuth0();
  

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div id="app" className="d-flex flex-column h-100">
      <Header />
      <div className="text-center">
      <SpotifyLogin />
      </div>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/playlists/:id"  element={<Playlist />}/>
        </Routes>
    </div>
  );
}

export default App;
