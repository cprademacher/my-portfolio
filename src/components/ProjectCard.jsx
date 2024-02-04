/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

function ProjectCard({
  imageSrc,
  imageAlt,
  title,
  deployedLink,
  githubLink,
  description,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageSrc} alt={imageAlt} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Stack
          direction="horizontal"
          gap={2}
          className="justify-content-center"
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
