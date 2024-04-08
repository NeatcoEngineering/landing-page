import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from './assets/Logo.png';
import banner from './assets/banner.png'

const App = () => {
  return (
    <div>
      {/* Banner */}
      <div className='flex aligns-center items-center justify-center'>
        <img src={banner} alt="Banner" />
      </div>

      {/* Content Container */}
      <div className="content-container flex flex-col pt-2 items-center justify-center">
        {/* Logo and Title */}
        <div className="flex items-center mb-6">
          <img src={logo} alt="Logo" className="w-16 h-16 mr-4" />
          <div>
            <h1 className="text-3xl font-bold text-gray-700 text-m sm:text-4xl">Neatco Engineering</h1>
            <p className="text-lg text-center text-gray-700">AI for the Circular Economy</p>
          </div>
        </div>

        {/* Links Column */}
        <div className="flex flex-col items-center w-full">
          <a href="https://intelview-cloud.web.app" className="button-link">
            <FontAwesomeIcon icon={faChartBar} className="mr-2" /> IntelView
          </a>
          <a href="https://www.neatcoeng.com" className="button-link">
            <FontAwesomeIcon icon={faGlobe} className="mr-2" /> Neatco
          </a>
          <a href="https://www.linkedin.com/company/42872230/" className="button-link">
            <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-blue-700" /> LinkedIn
          </a>
          <a href="https://www.youtube.com/channel/UCeVTUXQMhMoxSp2MsiKuJsg" className="button-link">
            <FontAwesomeIcon icon={faYoutube} className="mr-2 text-red-600" /> YouTube
          </a>
          <a href="https://twitter.com/neatcoeng?lang=en" className="button-link">
            <FontAwesomeIcon icon={faXTwitter} className="mr-2 text-black" /> Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;