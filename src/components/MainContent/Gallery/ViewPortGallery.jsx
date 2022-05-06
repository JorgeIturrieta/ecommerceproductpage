import React from 'react';
import { images } from '../../../constants';
const ViewPortGallery = ({ currentImage, handleModal }) => {
    return (
        <div
            className="carousel-viewport"
            onClick={handleModal ? () => handleModal((state) => !state) : null}
        >
            <div
                className="items"
                style={{
                    transform: `translateX(${-100 * currentImage}%)`
                }}
            >
                <img src={images.imageProduct1} alt="image1" />
                <img src={images.imageProduct2} alt="image2" />
                <img src={images.imageProduct3} alt="image3" />
                <img src={images.imageProduct4} alt="image4" />
            </div>
        </div>
    );
};

export default ViewPortGallery;
