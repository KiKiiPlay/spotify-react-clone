import { useEffect, useState } from "react";
import SingleSong from "./SingleSong";

const SongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica"
      );
      if (response.ok) {
        let data = await response.json();
        setSongs(data);
        console.log(data);
      } else {
        console.log("Some error from server");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {songs.data &&
        songs.data.map((element) => (
          <SingleSong songs={element} key={element.id} />
        ))}
    </div>
  );
};

export default SongList;
