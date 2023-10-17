import "../components/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="top-row">
        <div className="col-left">
          <h1>Mubi</h1>
          <p>Movie</p>
        </div>
        <div className="icon">
          <a href="/">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance"></i>
          </a>
        </div>
      </div>
      <div className="bottom-row">
        <div className="col">
          <h4>Project</h4>
          <a href="/">Status</a>
          <a href="/">Liscence</a>
          <a href="/">Location</a>
          <a href="/">Challenge</a>
        </div>
        <div className="col">
          <h4>Community</h4>
          <a href="/">Status</a>
          <a href="/">Liscence</a>
          <a href="/">Location</a>
          <a href="/">Challenge</a>
        </div>
        <div className="col">
          <h4>Help</h4>
          <a href="/">Status</a>
          <a href="/">Liscence</a>
          <a href="/">Location</a>
          <a href="/">Challenge</a>
        </div>
        <div className="col">
          <h4>Others</h4>
          <a href="/">Status</a>
          <a href="/">Liscence</a>
          <a href="/">Location</a>
          <a href="/">Challenge</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
