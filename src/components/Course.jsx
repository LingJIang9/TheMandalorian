import "../components/Course.css";
import CourseData from "./CourseData";
import book1 from "../assets/book1.jpeg";
import book2 from "../assets/book2.jpeg";
import book3 from "../assets/book3.jpeg";

function Course() {
  return (
    <div className="course">
      <h2>Flight with us</h2>
      <p>
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
      </p>
      <div className="course-card">
        <CourseData
          image={book1}
          heading="Witness1"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
        <CourseData
          image={book2}
          heading="Witness2"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
        <CourseData
          image={book3}
          heading="Witness3"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
      </div>
    </div>
  );
}

export default Course;
