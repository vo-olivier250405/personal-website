import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactMe } from "@/lib/resumeData";

export const Links = () => {
  return contactMe.map((contact, index) => (
    <a
      href={contact.link}
      target="blank"
      key={index}
      className="grid justify-center items-center hover:text-white"
    >
      <FontAwesomeIcon
        icon={contact.icon}
        width={contact.name === "CV" ? 20 : 25}
      />
    </a>
  ));
};
