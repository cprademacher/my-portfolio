import ProjectCard from "../components/ProjectCard";
import projectData from "../assets/projectData.js";
import Container from "react-bootstrap/Container";

function Portfolio2() {
  return (
    <Container gap={3}>
      {projectData.map((project) => (
        <div key={project.id}>
          <ProjectCard
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            title={project.title}
            description={project.description}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        </div>
      ))}
    </Container>
  );
}

export default Portfolio2;
