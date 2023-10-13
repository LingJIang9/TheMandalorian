import "../components/Book.css";
import Book from "../components/Book";
import book1 from "../assets/book1.jpeg";
import book2 from "../assets/book2.jpeg";
import book3 from "../assets/book3.jpeg";
import book9 from "../assets/book9.jpeg";
import book10 from "../assets/book10.jpeg";
import book11 from "../assets/book11.jpeg";
import book13 from "../assets/book13.jpeg";
import book14 from "../assets/book14.jpeg";
import book15 from "../assets/book15.jpg";

function BookData() {
  return (
    <div className="book">
      <h2>BOOK LIST</h2>
      <p>
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
      </p>
      <div className="book-card">
        <Book
          image={book1}
          heading="Witness"
          author="J A"
          genre="romance"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
        <Book
          image={book2}
          heading="Emergency"
          author="J C"
          genre="thriller"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
        <Book
          image={book3}
          heading="Beyond the door of no return"
          author="J bill"
          genre="sci-fi"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
        <Book
          image={book9}
          heading="A day in the life"
          author="Alice"
          genre="history"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
        <Book
          image={book10}
          heading="The rigor of Angels"
          author="Alice"
          genre="art"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
        <Book
          image={book11}
          heading="Console Poems"
          author="Alice"
          genre="art"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />

        <Book
          image={book13}
          heading="First gen"
          author="Alice"
          genre="romance"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />

        <Book
          image={book14}
          heading="Thunder clap"
          author="Alice"
          genre="romance"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />

        <Book
          image={book15}
          heading="The heaven and earth grocery store"
          author="Alice"
          genre="sci-fi"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
        <Book
          image={book1}
          heading="The heaven and earth grocery store"
          author="Alice"
          genre="sci-fi"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
        <Book
          image={book2}
          heading="The heaven and earth grocery store"
          author="Alice"
          genre="romance"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
        <Book
          image={book3}
          heading="The heaven and earth grocery store"
          author="Alice"
          genre="thriller"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
      </div>
    </div>
  );
}

export default BookData;
