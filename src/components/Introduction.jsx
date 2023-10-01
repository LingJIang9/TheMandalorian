import gliding1 from "../assets/gliding1.jpeg";
import gliding2 from "../assets/gliding2.jpeg";
import "../components/Introduction.css";

function Introduction() {
  return (
    <div className="introduction">
      <h1>This is Gliding....</h1>
      <p>
        Challenging, peaceful or highly competitive, gliding is a sport that
        offers a whole range of opportunities. You can drift silently along
        enjoying the sky and the country below, sharing a thermal with a
        circling buzzard.
      </p>
      <div className="introduction1">
        <div className="left-text">
          <h2>left side subtitle</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="right-img">
          <img src={gliding1} alt="img"></img>
          <img src={gliding2} alt="img"></img>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
