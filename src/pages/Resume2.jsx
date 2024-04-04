import MyResume from "../assets/Resume.pdf";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Certificate from "../assets/UT-Bootcamp-Certificate.pdf";

function Resume2() {
  const openPdf = () => {
    window.open(MyResume, "_blank");
  };

  const openCertificate = () => {
    window.open(Certificate, "_blank");
  };

  return (
    <Container>
      <div className="resume-container">
        <h1>Resume</h1>
        <div className="proficiencies">
          <h5>Highlight of my proficiencies:</h5>
          <ul className="proficiencies-list">
            <li className="proficiencies-item">
              <strong>Front End:</strong> HTML, CSS, JavaScript, REACT.js,
              NEXT.js
            </li>
            <li className="proficiencies-item">
              <strong>Back End:</strong> Express.js, Node.js RESTful API
            </li>
            <li className="proficiencies-item">
              <strong>Software Development Tools:</strong> AWS, Visual Studio
              Code, Git, GitHub, Heroku
            </li>
            <li className="proficiencies-item">
              <strong>Database Management:</strong> SQL, MongoDB
            </li>
            <li className="proficiencies-item">
              Written & Verbal Communication
            </li>
            <li className="proficiencies-item">
              Problem Solving and Algorithmic Thinking
            </li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <h5>Download my full resume here!</h5>
          <Button
            className="bg-success mt-3"
            variant="success"
            onClick={openPdf}
            size="lg"
          >
            My Resume
          </Button>

          <h5>Download my bootcamp certificate here!</h5>
          <Button
            className="bg-success mt-3"
            variant="success"
            onClick={openCertificate}
            size="lg"
          >
            See Certificate
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Resume2;
