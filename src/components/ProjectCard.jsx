/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Collapse from "react-bootstrap/Collapse";

function ProjectCard({
  imageSrc,
  imageAlt,
  title,
  deployedLink,
  githubLink,
  description,
}) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mt-3" style={{ width: "21rem", margin: "0 auto" }}>
      <Card.Img variant="top" src={imageSrc} alt={imageAlt} />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Stack>
          <Button
            style={{
              margin: "0 auto",
              backgroundColor: "#0d6efd",
              color: "white",
              border: "none",
            }}
            onClick={() => setOpen(!open)}
            aria-controls="description-text"
            aria-expanded={open}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              Show Description{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </Button>
          <Collapse in={open}>
            <Card.Text id="description">{description}</Card.Text>
          </Collapse>
        </Stack>
        <Stack
          direction="horizontal"
          gap={2}
          className="justify-content-center my-2"
        >
          <Button href={deployedLink} variant="primary">
            Application
          </Button>
          <Button href={githubLink} variant="primary">
            GitHub
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
