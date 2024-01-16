import Headshot from '../assets/img/headshot.jpg'

export default function AboutMe() {
  return (
    <div className="about-me-section">
      <h1>About Me</h1>
      <img
        className="headshot"
        src={Headshot}
        alt="Headshot"
      />
      <p className="about-me">
        My name is Cody Rademacher and I am a full stack software engineer. My
        professional career has been focused on sales for the last decade in
        both he SaaS industry as well as Real Estate. I have always been
        interested in web development, but it has taken until now to take the
        leap and I am very excited for this career change!
      </p>
    </div>
  );
}
