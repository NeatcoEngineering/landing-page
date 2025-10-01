import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChartBar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import banner from './assets/emc_banner.png';
import FeedbackModal from './FeedbackModal';
import { AI_IN_MANUFACTURING_FORM_URL } from './constants';

const App = () => {
  const [showSurveyLink, setShowSurveyLink] = useState(false);

  useEffect(() => {
    // Check if modal has been closed before - if so, show survey link on main page
    const hasBeenClosed = localStorage.getItem('feedbackModalClosed');
    if (hasBeenClosed) {
      setShowSurveyLink(true);
    }
  }, []);

  const handleModalClose = () => {
    setShowSurveyLink(true);
  };

  return (
    <div>
      {/* Banner */}
      <div className="banner-container flex aligns-center items-center justify-center">
        <img src={banner} alt="Banner" />
      </div>

      {/* Content Container */}
      <div className="content-container flex flex-col pt-2 items-center justify-center">
        {/* Title */}
        <div className="flex items-center mb-6">
          <div>
            <h1 className="text-3xl text-center font-bold text-white-700 text-m sm:text-4xl">Thank you for scanning our QR code!</h1>
          </div>
        </div>

        {/* Survey Link - shown after modal is closed */}
        {showSurveyLink && (
          <div className="mb-6 text-center">
            <p className="text-md mb-2">We'd love your feedback</p>
            <a
              href={AI_IN_MANUFACTURING_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center survey-link transition-colors"
            >
              AI in Manufacturing Survey
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
          </div>
        )}

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
            <FontAwesomeIcon icon={faXTwitter} className="mr-2 text-black" />
          </a>
        </div>
      </div>
      
      {/* Feedback Modal */}
      <FeedbackModal onModalClose={handleModalClose} />
    </div>
  );
};

export default App;
