import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faBity } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faBity} />
        <h1 className="text-xl font-bold">Movie App</h1>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-white">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="text-white">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="text-white">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
