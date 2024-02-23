import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from './assets/Logo.png';

const App = () => {
  return (
    <>
      <div class="absolute w-full h-full top-0 left-0 z-[-1] animate-gradientBG"></div>
      <div className="min-h-screen opacity-80 flex flex-col items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Logo and Company Description */}
          <div className="mb-4 text-center">
            <img src={logo} alt="Neatco Engineering Services Inc Logo" className="mx-auto h-20 w-20" />
            <h1 className="text-xl font-semibold text-gray-800 mt-2">Neatco Engineering Services Inc.</h1>
            <p className="text-gray-600 mt-2">Pioneering the future of the Circular Economy with AI and Vision technologies, AI-driven robotics, and cutting-edge IIoT Web Applications.</p>
            <p className="text-gray-600 mt-2">Crafting solutions that redefine advanced manufacturing, automation and robotics industries.</p>
          </div>

          {/* Links */}
          <div className="flex justify-around mt-6 text-center">
            <a href="https://www.neatcoeng.com" className="text-gray-600 hover:text-gray-800 transition duration-300">
              <FontAwesomeIcon icon={faGlobe} size="2x" />
              <span className="block text-sm mt-2">Website</span>
            </a>
            <a href="https://www.linkedin.com/company/42872230/" className="text-blue-600 hover:text-blue-800 transition duration-300">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <span className="block text-sm mt-2">LinkedIn</span>
            </a>
            <a href="https://www.youtube.com/channel/UCeVTUXQMhMoxSp2MsiKuJsg" className="text-red-600 hover:text-red-800 transition duration-300">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
              <span className="block text-sm mt-2">YouTube</span>
            </a>
            <a href="https://twitter.com/neatcoeng?lang=en" className="text-black hover:text-gray-600 transition duration-300">
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
              <span className="block text-sm mt-2">X (Twitter)</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
