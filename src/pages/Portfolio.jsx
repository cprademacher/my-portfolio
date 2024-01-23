import Project from "../components/Project";
import projectData from "../assets/projectData.js";
import Center from "../components/Center.jsx";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <Center>
        <div className="container-fluid">
          <ul className="cards projects">
            {projectData.map((project) => (
              <Project
                key={project.id}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                title={project.title}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
                description={project.description}
              />
            ))}
          </ul>
        </div>
      </Center>
    </div>
  );
}
