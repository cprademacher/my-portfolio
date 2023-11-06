export default function Resume() {
  return (
    <div className="resume-container">
      <div>
        <h1>Resume</h1>
      </div>
      <div className="proficiencies">
        <h5>Highlight of my proficiencies:</h5>
        <ul className="proficiencies-list">
          <li className="proficiencies-item">Front End: HTML, CSS, JavaScript, React.js</li>
          <li className="proficiencies-item">Back End: Express.js, Node.js RESTful API</li>
          <li className="proficiencies-item">Software Development Tools: Visual Studio Code, Git, GitHub, Heroku</li>
          <li className="proficiencies-item">Database Management: SQL, MongoDB</li>
          <li className="proficiencies-item">Written & Verbal Communication</li>
          <li className="proficiencies-item">Problem Solving and Algorithmic Thinking</li>
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
