/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function Project({
  imageSrc,
  imageAlt,
  title,
  deployedLink,
  githubLink,
}) {
  return (
    <li className="project-card">
      <img src={imageSrc} alt={imageAlt} />
      <h3>{title}</h3>
      <h4>
        <a href={deployedLink}>Link to deployed application</a>
      </h4>
      <h4>
        <a href={githubLink}>Link to corresponding github</a>
      </h4>
    </li>
  );
}
