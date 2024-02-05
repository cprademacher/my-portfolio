import ProjectCard from "../components/ProjectCard";
import projectData from "../assets/projectData.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Portfolio2() {
  return (
    <Container>
      <h1>Portfolio</h1>
      <Row xs={1} md={2}>
        {projectData.map((project) => (
          <div key={project.id} className="justify-content-center">
            <Col>
              <ProjectCard
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                title={project.title}
                description={project.description}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </Col>
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio2;
