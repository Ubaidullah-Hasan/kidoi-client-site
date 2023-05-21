import React from 'react';

const Gallery = ({toy}) => {
    const { picture } = toy;
    return (
        <div>
            <img src={picture} alt="image" className='rounded-lg' />
        </div>
    );
};

export default Gallery;