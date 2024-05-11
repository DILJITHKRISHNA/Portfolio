import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
import Instagram from "../../assets/images/socials/instagram.svg";
const NavigationSocials = () => {
  return (
    <section className="social-media">
      <a
        href="https://www.linkedin.com/in/diljith-krishna-952a822b4/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/DILJITHKRISHNA"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="github" />
      </a>
      <a
        href="https://www.instagram.com/diljith.krishna_/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Instagram} alt="Instagram" />
      </a>
    </section>
  );
};

export default NavigationSocials;
