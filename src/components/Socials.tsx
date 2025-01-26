import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Socials: React.FC = () => {
  return (
    <div className="card bg-base-100 p-4 sm:p-1 md:p-2">
      <div className="card-body felx flex-row justify-center items-center">
        <a
          href="https://www.youtube.com/@conscious_parenting"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/prasad.manerikar.7"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/prasad_manerikar/"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
