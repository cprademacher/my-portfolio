import MyResume from "../assets/Resume.pdf";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Resume2() {
  const openPdf = () => {
    window.open(MyResume, "_blank");
  };

  return (
    <Container>
      <h1>Resume</h1>
      <div>
        <Button onClick={openPdf}>My Resume</Button>
      </div>
    </Container>
  );
}

export default Resume2;
