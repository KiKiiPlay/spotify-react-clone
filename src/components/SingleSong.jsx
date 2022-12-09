import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleSong = ({ songs }) => {
  return (
    <div>
      <Card className="m-3" style={{ width: "250px" }}>
        <Card.Img variant="top" src={songs.album.cover_xl} />
        <Card.Body>
          <Card.Title>{songs.title}</Card.Title>
          <Button variant="primary">Like song</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleSong;
