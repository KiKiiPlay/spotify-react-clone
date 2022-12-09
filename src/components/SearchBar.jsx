import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Form, InputGroup, Button } from "react-bootstrap";
import logo from "./Spotify_Logo_CMYK_Green.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md="3">
            <img src={logo} alt="logo" style={{ width: "300px" }} />
          </Col>
          <Col className="mt-3 d-flex">
            <InputGroup size="lg" style={{ width: "800px", height: "20px" }}>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
            <Button
              className="mx-3"
              variant="success"
              style={{ height: "48px" }}
              onClick={() => {
                dispatch({
                  type: "SEARCH_SONG",
                  payload: search,
                });
              }}
            >
              Search
            </Button>
          </Col>
          <Col>
            <Button onClick={() => navigate("/liked")}>Favoutite</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchBar;
