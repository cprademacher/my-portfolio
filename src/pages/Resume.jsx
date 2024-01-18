import Button from "../components/Button";
import MyResume from '../assets/Resume.pdf';

export default function Resume() {

    const openPdf = () => {
        window.open(MyResume, '_blank');
    };


  return (
    <div className="resume-container">
      <div>
        <h1>Resume</h1>
      </div>
      <div className="proficiencies">
        <h5>Highlight of my proficiencies:</h5>
        <ul className="proficiencies-list">
          <li className="proficiencies-item">Front End: HTML, CSS, JavaScript, REACT.js, NEXT.js</li>
          <li className="proficiencies-item">Back End: Express.js, Node.js RESTful API</li>
          <li className="proficiencies-item">Software Development Tools: AWS, Visual Studio Code, Git, GitHub, Heroku</li>
          <li className="proficiencies-item">Database Management: SQL, MongoDB</li>
          <li className="proficiencies-item">Written & Verbal Communication</li>
          <li className="proficiencies-item">Problem Solving and Algorithmic Thinking</li>
        </ul>
      </div>
      <div>
        <h4>Download my full resume here!</h4>
        <Button text="Download PDF" onClick={openPdf} className="resume-button"></Button>
      </div>
    </div>
  );
}
