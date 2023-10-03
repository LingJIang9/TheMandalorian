import "./Introduction.css";
import IntroductionData from "../components/IntroductionData.jsx";
import book4 from "../assets/book4.png";
import book5 from "../assets/book5.png";
import book6 from "../assets/book6.png";
import book7 from "../assets/book7.png";
const Introduction = () => {
  return (
    <div className="introduction">
      <h1>Dublin Book Club....</h1>
      <p>
        Pellentesque condimentum elit arcu, non hendrerit ex porttitor in. Nunc
        sollicitudin velit leo, quis lobortis velit venenatis et. Integer
        elementum congue erat eget posuere.
      </p>
      {/* component1 */}
      <IntroductionData
        className="introduction1"
        title="Left Side Subtitle1"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged."
        image1={book4}
        image2={book7}
      />
      {/* component2 */}
      <IntroductionData
        className="introduction1-reverse"
        title="Left Side Subtitle2"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged."
        image1={book6}
        image2={book5}
      />
    </div>
  );
};

export default Introduction;
