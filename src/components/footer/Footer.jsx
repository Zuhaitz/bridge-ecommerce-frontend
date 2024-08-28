import "./Footer.scss";

const Footer = () => {
  return (
    <div className="foot">
      <p className="foot__legal">
        Made for an exercise of{" "}
        <span className="foot__highlight">The Bridge</span>
      </p>

      <p className="foot__credits">
        Page made by{" "}
        <a
          href="https://github.com/CarBlank"
          target="_blank"
          className="foot__link"
        >
          Carlota
        </a>{" "}
        &{" "}
        <a
          href="https://github.com/Zuhaitz"
          target="_blank"
          className="foot__link"
        >
          Zuhaitz
        </a>
      </p>
    </div>
  );
};

export default Footer;
