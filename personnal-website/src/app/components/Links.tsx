import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile, faMailBulk } from "@fortawesome/free-solid-svg-icons";

export const Links = () => {
  return (
    <div className="mt-8">
      <a
        className="m-4 p-4 border-2 rounded-md  text-white text-2xl hover:bg-gray-400 transition-all 0.3s ease-in hover:text-red-900"
        href="https://github.com/vo-olivier250405"
        target="blank"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        className="m-4 p-4 border-2 rounded-md  text-white text-2xl hover:bg-gray-400 transition-all 0.3s ease-in hover:text-red-900"
        href="https://www.linkedin.com/in/voolivier/"
        target="blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a
        className="m-4 p-4 border-2 rounded-md  text-white text-2xl hover:bg-gray-400 transition-all 0.3s ease-in hover:text-red-900"
        href="mailto:oliviervo.pro@gmail.com?"
        target="blank"
      >
        <FontAwesomeIcon icon={faMailBulk} />
      </a>
      <a
        className="m-4 p-4 border-2 rounded-md  text-white text-2xl hover:bg-gray-400 transition-all 0.3s ease-in hover:text-red-900"
        target="blank"
        href="/assets/CV-Vo-Olivier.pdf"
        download="/assets/CV-Vo-Olivier.pdf"
      >
        <FontAwesomeIcon icon={faFile} />: C.V.
      </a>
    </div>
  );
};
