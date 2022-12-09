import { useEffect, useState } from "react";
import SingleSong from "./SingleSong";
import { useSelector } from "react-redux";

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const group = useSelector((state) => state.searchQuerry.searchedSong);

  useEffect(() => {
    fetchSongs();
  }, [group]);

  const fetchSongs = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${group}`
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
