import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AI_IN_MANUFACTURING_FORM_URL } from './constants';

const FeedbackModal = ({ onModalClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if modal has been closed before
    const hasBeenClosed = localStorage.getItem('feedbackModalClosed');
    if (!hasBeenClosed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('feedbackModalClosed', 'true');
    if (onModalClose) {
      onModalClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg p-6 max-w-md mx-4 relative shadow-xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 hover:text-gray-700 transition-colors"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        {/* Modal content */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            We'd love your feedback on our AI in Manufacturing Survey
          </h3>
          
          <a
            href={AI_IN_MANUFACTURING_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center survey-link transition-colors"
          >
            Go to survey
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
