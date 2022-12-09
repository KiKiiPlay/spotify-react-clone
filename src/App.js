import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import LikedSongs from "./components/LikedSongs";
import SearchBar from "./components/SearchBar";
import SongList from "./components/SongList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <SongList />
              </>
            }
          />
          <Route path="/liked" element={<LikedSongs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
