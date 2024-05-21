import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Card({ name, position, image, githubLink, linkedinLink }) {
  return (
    <>
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
        <div className="px-6 py-4">
          <img className="w-full h-auto mb-4" src={image} alt={name} />
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{position}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-center">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-gray-700 text-2xl mr-4 hover:text-blue-500" />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-gray-700 text-2xl hover:text-blue-500" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;