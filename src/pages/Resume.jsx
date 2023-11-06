export default function Resume() {
  return (
    <div className="resume-container">
      <div>
        <h1>Resume</h1>
      </div>
      <div className="proficiencies">
        <h5>Highlight of my proficiencies:</h5>
        <ul className="proficiencies-list">
          <li className="proficiencies-item">First thing</li>
          <li className="proficiencies-item">Second Thing</li>
          <li className="proficiencies-item">Third thing</li>
          <li className="proficiencies-item">Fourth Thing</li>
          <li className="proficiencies-item">Fifth thing</li>
          <li className="proficiencies-item">Sixth Thing</li>
        </ul>
      </div>
      <div>
        <h4>Download my full resume here!</h4>
        <a href="src/assets/Resume-Software-Engineer.pdf" download>
          Download PDF
        </a>
      </div>
    </div>
  );
}
