import React from 'react';
import PropTypes from 'prop-types';

const Links = ({ projetsData }) => {
  return (
    <div className='links'>
      <p>
        Vous pouvez{' '}
        {projetsData.githubLinks.map((link, index) => (
          <a key={index} href={link.url}>
            {link.text}
          </a>
        ))}{' '}
        pour consulter le code.
      </p>
    </div>
  );
};

Links.propTypes = {
  projetsData: PropTypes.shape({
    githubLinks: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Links;