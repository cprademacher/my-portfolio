import Project from "../components/Project";
import projectData from "../assets/projectData.js";

export default function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <div className="container-fluid">
        <ul className="cards">
          {projectData.map((project) => (
            <Project
              key={project.id}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              title={project.title}
              deployedLink={project.deployedLink}
              githubLink={project.githubLink}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

{
  /* <Project title="React App" />
          <Project title="Node App" />
          <Project title="Java App" />
          <Project title="JavaScript App" />
          <Project title="C# App" />
          <Project title="Curry App" />
          <Project title="AWS App" /> */
}
