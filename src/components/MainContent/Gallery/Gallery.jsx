import React, { Fragment, useState } from 'react';
import { images } from '../../../constants';
import useHandleGallery from '../../../hooks/useHandleGallery';

import { ThumbnailImages, ViewPortGallery } from '../../MainContent';
import LightBoxGallery from './LightBoxGallery';
const Gallery = () => {
    const { currentImage, handleDirectAccess, handlePage } =
        useHandleGallery(0);
    const [openModal, setOpenModal] = useState(false);
    return (
        <React.Fragment>
            <div className="main__gallery">
                {/* ViewPort Gallery */}

                <ViewPortGallery
                    currentImage={currentImage}
                    handleModal={setOpenModal}
                />

                {/* Button Left */}
                <div
                    className="swipe-btn-left"
                    role="button"
                    onClick={() => handlePage(-1)}
                >
                    <img src={images.iconPrevious} alt="previous_image" />
                </div>
                {/* Button Right */}
                <div
                    className="swipe-btn-right"
                    role="button"
                    onClick={() => handlePage(1)}
                >
                    <img src={images.iconNext} alt="next_image" />
                </div>

                {/* ThumbNail Images */}
                <ThumbnailImages
                    handleDirectAccess={handleDirectAccess}
                    name="thumbnailGallery"
                    defaultValue={currentImage}
                />
            </div>
            {openModal && (
                <LightBoxGallery
                    setOpenModal={setOpenModal}
                    active={currentImage}
                />
            )}
        </React.Fragment>
    );
};

export default Gallery;
