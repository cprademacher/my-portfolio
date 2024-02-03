import ProjectCard from "../components/ProjectCard";
import projectData from "../assets/projectData.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Portfolio2() {
  return (
    <Container className="bg-black">
      <Row xs={1} md={2} className="g-4">
        {projectData.map((project) => (
          <Col key={project.id}>
            <ProjectCard
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              title={project.title}
              description={project.description}
              deployedLink={project.deployedLink}
              githubLink={project.githubLink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio2;
