import Project from "../components/Project";

export default function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <div className="container-fluid">
        <ul className="cards">
          <Project title="React App" />
          <Project title="Node App" />
          <Project title="Java App" />
          <Project title="JavaScript App" />
          <Project title="C# App" />
          <Project title="Curry App" />
          <Project title="AWS App" />
        </ul>
      </div>
    </>
  );
}
