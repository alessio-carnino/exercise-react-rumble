export default ({ id, image, title, year }) => {
  return (
    <div className="card">
      <figure>
        <img src={image} />
      </figure>
      <h4>{title}</h4>
      <p>{year}</p>
    </div>
  );
};
