// eslint-disable-next-line react/prop-types
export default function Project({ title }) {
  return (
    <li>
      <img src="#" alt="a photo" />
      <h3>{title}</h3>
      <h4><a href="#">Link to deployed application</a></h4>
      <h4><a href="#">Link to corresponding github</a></h4>
    </li>
  );
}
