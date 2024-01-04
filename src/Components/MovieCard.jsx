import { Link } from "react-router-dom";

export default ({ id, image, title, year }) => {
  return (
    <Link to={`/movie/${id}`} className="card">
      <figure>
        <img src={image} />
      </figure>
      <h4>{title}</h4>
      <p>{year}</p>
    </Link>
  );
};
