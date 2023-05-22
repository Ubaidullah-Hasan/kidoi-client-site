import React from 'react';

const Gallery = ({toy}) => {
    const { picture } = toy;
    return (
        <div data-aos="zoom-in">
            <img src={picture} alt="image" className='rounded-lg shadow' />
        </div>
    );
};

export default Gallery;