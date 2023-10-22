import React from 'react';
import '../index.css'

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-[12.6px] dark:bg-gray-900">
      <div className="text-center">
        <p className="text-gray-700 dark:text-gray-400">
          Made with{' '}
          <span className="inline-block animate-pound" role="img" aria-label="pound animation">
          &#10084;
          </span>{' '}
          by sourav
        </p>
      </div>
    </footer>
  );
};

export default Footer;
