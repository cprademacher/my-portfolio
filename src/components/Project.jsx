/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function Project({
  imageSrc,
  imageAlt,
  title,
  deployedLink,
  githubLink,
  description,
}) {
  return (
    <div className="card-and-description">
      <li className="project-card">
        <img className="card-image" src={imageSrc} alt={imageAlt} />
        <h3>{title}</h3>
        <div className="card-buttons">
          <Link to={deployedLink}>
            <Button
              text="Application"
              href={deployedLink}
              target="_blank"
              rel="noreferrer"
            />
          </Link>
          <Link to={githubLink}>
            <Button text="GitHub" target="_blank" rel="noreferrer" />
          </Link>
        </div>
      </li>
      <div className="project-description-container">
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}
