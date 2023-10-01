import "./Introduction.css";
import IntroductionData from "../components/IntroductionData.jsx";
import gliding1 from "../assets/gliding1.jpeg";
import gliding2 from "../assets/gliding2.jpeg";
import gliding3 from "../assets/gliding3.jpeg";
import gliding4 from "../assets/gliding4.jpeg";
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
      {/* component1 */}
      <IntroductionData
        title="Left Side Subtitle1"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged."
        image1={gliding1}
        image2={gliding2}
      />
      {/* component2 */}
      <IntroductionData
        title="Left Side Subtitle2"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged."
        image1={gliding3}
        image2={gliding4}
      />
    </div>
  );
}

export default Introduction;
