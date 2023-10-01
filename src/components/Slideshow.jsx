import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

const slideImages = [
  { url: "https://picsum.photos/id/1/400/250", caption: "first-slide" },
  { url: "https://picsum.photos/id/2/400/250", caption: "second-slide" },
  { url: "https://picsum.photos/id/3/400/250", caption: "third-slide" },
];

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "400px",
  backgroundSize: "cover",
};

const spanStyle = {
  fontSize: "20px",
};

function Slideshow() {
  return (
    <div>
      <Fade>
        {slideImages.map((image, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${image.url})`,
              }}
            >
              <span style={spanStyle}>{image.caption}</span>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default Slideshow;
