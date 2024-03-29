import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from './assets/Logo.png';
import banner from './assets/banner.png'

const App = () => {
  return (
    <div className="relative min-h-screen animate-gradientBG">
      {/* Banner */}
      <div className="banner-container">
        <img src={banner} alt="Banner" />
      </div>

      {/* Content Container */}
      <div className="content-container flex flex-col items-center justify-center pt-48 min-h-screen">
        {/* Logo and Title */}
        <div className="flex items-center mb-6">
          <img src={logo} alt="Logo" className="w-16 h-16 mr-4" />
          <div>
            <h1 className="text-2xl font-bold text-white text-3xl">Neatco Engineering</h1>
            <p className="text-md text-center text-gray-300">AI for the Circular Economy</p>
          </div>
        </div>

        {/* Links Column */}
        <div className="space-y-4">
        <a href="https://intelview-cloud.web.app" className="flex border-b items-center text-white text-3xl hover:text-gray-300">
            <FontAwesomeIcon icon={faChartBar} className="mr-2" /> IntelView
          </a>
          <a href="https://www.neatcoeng.com" className="flex border-b items-center text-white text-3xl hover:text-gray-300">
            <FontAwesomeIcon icon={faGlobe} className="mr-2" /> Website
          </a>
          <a href="https://www.linkedin.com/company/42872230/" className="flex border-b items-center text-white text-3xl hover:text-gray-300">
            <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-blue-700" /> LinkedIn
          </a>
          <a href="https://www.youtube.com/channel/UCeVTUXQMhMoxSp2MsiKuJsg" className="flex border-b items-center text-white text-3xl hover:text-gray-300">
            <FontAwesomeIcon icon={faYoutube} className="mr-2 text-red-600" /> YouTube
          </a>
          <a href="https://twitter.com/neatcoeng?lang=en" className="flex border-b items-center text-white text-3xl hover:text-gray-300">
            <FontAwesomeIcon icon={faXTwitter} className="mr-2 text-black" /> X (Twitter)
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;