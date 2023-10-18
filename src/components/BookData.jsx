import "../components/Book.css";
import Book from "../components/Book";
import book1 from "../assets/movie1.png";
import book2 from "../assets/movie2.png";
import book3 from "../assets/movie3.png";
import book9 from "../assets/movie4.png";
import book10 from "../assets/movie5.png";
import book11 from "../assets/movie6.png";
import book13 from "../assets/movie7.png";
import book14 from "../assets/movie8.png";
import book15 from "../assets/movie9.png";
import book16 from "../assets/movie10.png";
import book17 from "../assets/movie11.png";
import book18 from "../assets/movie12.png";

function BookData() {
  return (
    <div className="book">
      <h2>Movie of This ear</h2>
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
          image={book16}
          heading="The heaven and earth grocery store"
          author="Alice"
          genre="sci-fi"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
        <Book
          image={book17}
          heading="The heaven and earth grocery store"
          author="Alice"
          genre="romance"
          text="Donec consequat vulputate lectus nec facilisis. Nam id varius eros, eget placerat odio. Pellentesque felis enim, laoreet nec tempor ac, cursus quis quam. "
        />
        <Book
          image={book18}
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
