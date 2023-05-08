import React from "react";
import CV from "../../assets/CV_Pierre_Merlaud.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} target="_blank" rel="noreferrer" className="btn">
        CV
      </a>
      <a href="#contact" className="btn btn-primary">
        CONTACT
      </a>
    </div>
  );
};

export default CTA;
