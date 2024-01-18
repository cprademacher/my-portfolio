import ProfilePhoto from "../assets/img/Profile-Photo.jpeg";

export default function AboutMe() {
  return (
    <>
      <h1>About Me</h1>
      <div className="about-me-section">
        <div className="about-me-photo">
          <img className="headshot" src={ProfilePhoto} alt="Profile Photo" />
        </div>
        <div className="about-me-info">
          <p className="intro">
            I am a Software Engineer with a passion for solving complex problems
            through innovative and efficient software solutions. I have a solid
            foundation in full-stack web development, including JavaScript,
            HTML, CSS, and modern frameworks like REACT.js and NEXT.js. A quick
            learner with excellent problem-solving skills, eager to contribute
            technical skills and a strong work ethic to a dynamic software
            engineering team.
          </p>

          <p className="intro-continued">
            Outside of software engineering, some interesting things about me
            are that I played college football at SMU, I enjoy just about any
            outdoor activity including falling in love with snowboarding in
            recent years, and a big goal of mine is to get my private pilot
            license.
          </p>
        </div>
      </div>
    </>
  );
}
