import Course from "./Course";
import "../components/Course.css";

function CourseData(props) {
  return (
    <div className="c-card">
      <div className="c-image">
        <img src={props.image}></img>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default CourseData;
