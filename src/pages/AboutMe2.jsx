import ProfilePhoto from "../assets/img/Profile-Photo.jpeg";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutMe2() {
  return (
    <Container>
      <h1>About Me</h1>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row className="about-me-text">
        <Col xs={8} lg={4} className="mx-auto mb-4">
          <Image src={ProfilePhoto} alt="Profile Photo" rounded />
        </Col>
        <Col xs={8} lg={8} className="mx-auto my-auto text-center">
          <Card.Body className="mb-3">
            I am a Software Engineer with a passion for solving complex problems
            through innovative and efficient software solutions. I have a solid
            foundation in full-stack web development, including JavaScript,
            HTML, CSS, and modern frameworks like REACT.js and NEXT.js. A quick
            learner with excellent problem-solving skills, eager to contribute
            technical skills and a strong work ethic to a dynamic software
            engineering team.
          </Card.Body>
          <Card.Body>
            Outside of software engineering, some interesting things about me
            are that I played college football at SMU, I enjoy just about any
            outdoor activity including falling in love with snowboarding in
            recent years, and a big goal of mine is to get my private pilot
            license.
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe2;
