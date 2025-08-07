import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-700 text-white py-4 px-4 shadow-inner">
      <div className="flex flex-col items-center justify-center space-y-2">
        {/* Social Icons */}
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/vasavikrishnachintamaneni" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a href="https://github.com/VasaviKrishnaChintamaneni" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub className="text-2xl hover:text-gray-300 transition" />
          </a>
          <a href="https://www.instagram.com/vasavi_krishna_chintamaneni" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram className="text-2xl hover:text-pink-400 transition" />
          </a>
          <a href="mailto:chvasavikrishna101299@gmail.com" title="Email">
            <MdEmail className="text-2xl hover:text-red-400 transition" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-300 text-center">
          © {new Date().getFullYear()} Vasavi Krishna Chintamaneni. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
