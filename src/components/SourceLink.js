import React from 'react';

const SourceLink = props => {
  /* eslint-disable jsx-a11y/anchor-has-content */
  const handleLogoClick = (e) => {
    e.preventDefault()
  };
  return (
    <a href="/" target="_blank" rel="noopener noreferrer" {...props} onClick={handleLogoClick} />
  );
};

export default SourceLink;
