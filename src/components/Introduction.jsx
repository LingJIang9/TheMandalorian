import "./Introduction.css";
import IntroductionData from "../components/IntroductionData.jsx";
import book4 from "../assets/book4.png";
import book5 from "../assets/book5.png";
import book6 from "../assets/book6.png";
import book7 from "../assets/book7.png";
const Introduction = () => {
  return (
    <div className="introduction">
      <h1>Fusce Ante Lorem</h1>
      <p>
        Etiam non tincidunt elit. In dui neque, interdum in sapien vel,
        convallis congue enim. Morbi dignissim convallis vestibulum. Fusce
        vehicula nulla quis turpis rhoncus, eget dictum sapien laoreet. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Pellentesque dignissim ac tellus id commodo. Morbi
        eu turpis vel turpis porta dictum. Donec quis interdum orci, ac
        malesuada sapien. Aliquam quis feugiat elit. In hac habitasse platea
        dictumst. Phasellus ligula augue, hendrerit non ligula eget, ullamcorper
        efficitur dolor. Fusce ante lorem, imperdiet vel arcu nec, cursus congue
        purus.
      </p>
      {/* component1 */}
      <IntroductionData
        className="introduction1"
        title="Left Side Subtitle1"
        text="Morbi aliquet ultrices magna sit amet efficitur. Mauris lobortis lobortis interdum. Aenean fringilla vel velit quis condimentum. Etiam dignissim a odio in varius. Curabitur blandit elit est, a aliquam sapien efficitur vel. Vestibulum eu nisl bibendum, ullamcorper sapien vitae, egestas ipsum. Sed vitae auctor sapien. Nam vestibulum lectus eget massa laoreet, sit amet congue libero viverra. Nullam ut massa ac nibh ullamcorper porttitor. "
        image1={book4}
        image2={book7}
      />
      {/* component2 */}
      <IntroductionData
        className="introduction1-reverse"
        title="Left Side Subtitle2"
        text="Morbi aliquet ultrices magna sit amet efficitur. Mauris lobortis lobortis interdum. Aenean fringilla vel velit quis condimentum. Etiam dignissim a odio in varius. Curabitur blandit elit est, a aliquam sapien efficitur vel. Vestibulum eu nisl bibendum, ullamcorper sapien vitae, egestas ipsum. Sed vitae auctor sapien. Nam vestibulum lectus eget massa laoreet, sit amet congue libero viverra. Nullam ut massa ac nibh ullamcorper porttitor. "
        image1={book6}
        image2={book5}
      />
    </div>
  );
};

export default Introduction;
