import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { useMediaQuery } from "react-responsive";

function Contact2() {
  const isMdOrAbove = useMediaQuery({ query: "(min-width: 768px)" });

  const mdClass = "mx-auto text-3xl mb-4 text-center";

  const smClass = "mx-auto text-xl mb-4 text-center";

  const contactInfo = {
    name: "Cody Rademacher",
    email: "cprademacher36@gmail.com",
    phone: "512-461-2129",
    github: "https://github.com/cprademacher",
    linkedIn: "https://www.linkedin.com/in/cody-rademacher-5157187b/",
  };

  return (
    <>
      <Container>
        <h1>Contact</h1>
        <Card style={{ border: "none" }}>
          <Stack
            direction={isMdOrAbove ? "horizontal" : "vertical"}
            className={isMdOrAbove ? mdClass : smClass}
            gap={2}
          >
            <Card.Text style={{ fontWeight: "bold" }}>Name: </Card.Text>
            <Card.Text>{contactInfo.name}</Card.Text>
          </Stack>
          <Stack
            direction={isMdOrAbove ? "horizontal" : "vertical"}
            className={isMdOrAbove ? mdClass : smClass}
            gap={2}
          >
            <Card.Text style={{ fontWeight: "bold" }}>Email: </Card.Text>
            <Card.Link
              className="contact-link"
              href={`mailto:${contactInfo.email}`}
            >
              {contactInfo.email}
            </Card.Link>
          </Stack>
          <Stack
            direction={isMdOrAbove ? "horizontal" : "vertical"}
            className={isMdOrAbove ? mdClass : smClass}
            gap={2}
          >
            <Card.Text style={{ fontWeight: "bold" }}>Phone Number: </Card.Text>
            <Card.Text>{contactInfo.phone}</Card.Text>
          </Stack>
          <Stack
            direction={isMdOrAbove ? "horizontal" : "vertical"}
            className={isMdOrAbove ? mdClass : smClass}
            gap={2}
          >
            <Card.Text style={{ fontWeight: "bold" }}>GitHub: </Card.Text>
            <Card.Link
              className="contact-link"
              href={contactInfo.github}
              target="_blank"
            >
              My GitHub Page
            </Card.Link>
          </Stack>
          <Stack
            direction={isMdOrAbove ? "horizontal" : "vertical"}
            className={isMdOrAbove ? mdClass : smClass}
            gap={2}
          >
            <Card.Text style={{ fontWeight: "bold" }}>LinkedIn: </Card.Text>
            <Card.Link
              className="contact-link"
              href={contactInfo.linkedIn}
              target="_blank"
            >
              My LinkedIn Page
            </Card.Link>
          </Stack>
        </Card>
      </Container>
    </>
  );
}

export default Contact2;
