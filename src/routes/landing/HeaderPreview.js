import { Link } from "react-router-dom";

const HeaderPreview = () => {
  return (
    <article className="header">
      <h1 className="header-font white-text h1-tag">
        Hi, I'm <br></br>
        <em className="pink-text">Diljith krishna</em>
        <br></br>Mern Stack Developer
      </h1>
      <p className="gray-text p-tag">Web Developer</p>
      <Link className="pink-text" to="/portfolio">
        Check my works
      </Link>
    </article>
  );
};

export default HeaderPreview;
