import React from 'react';
import PropTypes from 'prop-types';

const Title = ({title, subtitle}) => {
    return (
        <div className= 'title'>
            <h1 className='title__title'>{title}</h1>
            <p className='title__subtitle'>{subtitle}</p>
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default Title;