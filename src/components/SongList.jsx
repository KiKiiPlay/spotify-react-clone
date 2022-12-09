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
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      );
      if (response.ok) {
        let data = await response.json();
        setSongs(data);
        console.log(songs);
      } else {
        console.log("Some error from server");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {songs.data.map((element) => (
        <SingleSong songs={element} key={element.id} />
      ))}
    </>
  );
};

export default SongList;
