import "../components/Book.css";

function Book(props) {
  return (
    <div className="b-card">
      <div className="b-image">
        <img src={props.image}></img>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default Book;
