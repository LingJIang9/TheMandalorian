import "../components/Book.css";
import BookData from "./BookData";
import book1 from "../assets/book1.jpeg";
import book2 from "../assets/book2.jpeg";
import book3 from "../assets/book3.jpeg";

function Book() {
  return (
    <div className="book">
      <h2>BOOK GENRES</h2>
      <p>
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
      </p>
      <div className="book-card">
        <BookData
          image={book1}
          heading="Fiction"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
        <BookData
          image={book2}
          heading="Bibliography"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
        <BookData
          image={book3}
          heading="Sci-Fi"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
        <BookData
          image={book3}
          heading="Romance"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
        <BookData
          image={book1}
          heading="Self-help"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
        <BookData
          image={book2}
          heading="Comic"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
      </div>
    </div>
  );
}

export default Book;
