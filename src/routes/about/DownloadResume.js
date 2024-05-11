import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/Diljith_Krishna's_Resume.pdf";

const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Diljith Krishna">
        <img
          src={DownloadIcon}
          alt="Resume download button"
          className="download-img"
        />
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
