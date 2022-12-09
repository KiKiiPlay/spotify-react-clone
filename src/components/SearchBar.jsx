import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Form, InputGroup, Button } from "react-bootstrap";
import logo from "./Spotify_Logo_CMYK_Green.png";

const SearchBar = () => {
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
              />
            </InputGroup>
            <Button
              className="mx-3"
              variant="success"
              style={{ height: "48px" }}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchBar;
