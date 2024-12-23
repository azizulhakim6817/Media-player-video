import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ReactPlayer from "react-player";

import thumbnailImage from "../../assets/images/poster.jpeg";

const MediaPlayer = () => {
  const [input, setInput] = useState("https://youtu.be/I-DzvL6yvGI");
  const [fileUrl, setFileUrl] = useState("https://youtu.be/I-DzvL6yvGI");

  return (
    <Container>
      <Row className=" mb-5">
        <Col className="col-md-6 offset-md-3">
          <h1 className="text-center mb-4">
            <span className=" text-primary">
              Me
              <span className=" text-success">di</span>a
            </span>
            <span className=" text-warning"> Player</span>
          </h1>

          {/* Video URL Input Form */}
          <Form>
            <Form.Group>
              <Form.Label
                className=" fw-bold text-white "
                htmlFor="inputVideoUrl"
              >
                Video URL :
              </Form.Label>
              <Form.Control
                name="inputVideoUrl"
                id="inputVideoUrl"
                value={input}
                onChange={(e) => setInput(e.target.value)} // Update input value
                placeholder="Enter Video URL"
              />
            </Form.Group>

            {/* Button to Update Video URL */}
            <Form.Group className="my-4">
              <Button
                type="button"
                onClick={() => setFileUrl(input)}
                className=" btn btn-primary fw-bold"
                block
              >
                Update & Play Video
              </Button>
            </Form.Group>
          </Form>

          {/* ReactPlayer with Thumbnail */}
          <div className="video-player border-5">
            <ReactPlayer
              url={fileUrl}
              width="100%"
              height="300px"
              controls
              light={thumbnailImage}
              playing={false}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MediaPlayer;
