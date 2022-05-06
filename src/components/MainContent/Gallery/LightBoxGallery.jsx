import React, { useEffect } from 'react';
import { images } from '../../../constants';
import useHandleGallery from '../../../hooks/useHandleGallery';
import { ThumbnailImages, ViewPortGallery } from '../index';
const LightBoxGallery = ({ setOpenModal, active }) => {
    const { currentImage, setCurrentImage, handleDirectAccess, handlePage } =
        useHandleGallery(active);

    // Allow users press escape key to close  and press left and right keys to move

    const handleKeyDown = (event) => {
        if (event.keyCode === 27) {
            setOpenModal((state) => !state);
        }
        if (event.keyCode === 37) {
            setCurrentImage((image) => (image > 0 ? image - 1 : image));
        }
        if (event.keyCode === 39) {
            setCurrentImage((image) => (image < 3 ? image + 1 : image));
        }
    };
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="main__lightbox-gallery">
            <div className="lightbox-gallery-content">
                <div
                    className="btn-lightbox"
                    role="button"
                    onClick={() => setOpenModal((state) => !state)}
                >
                    <img src={images.iconClose} alt="close-btn" />
                </div>
                <ViewPortGallery currentImage={currentImage} />
                <div
                    className="swipe-btn-left left"
                    role="button"
                    onClick={() => handlePage(-1)}
                >
                    <img src={images.iconPrevious} alt="previous_image" />
                </div>
                {/* Button Right */}
                <div
                    className="swipe-btn-right right"
                    role="button"
                    onClick={() => handlePage(1)}
                >
                    <img src={images.iconNext} alt="next_image" />
                </div>
                <ThumbnailImages
                    handleDirectAccess={handleDirectAccess}
                    name={'thumbnailLightBoxGallery'}
                    defaultValue={currentImage}
                />
            </div>
        </div>
    );
};

export default LightBoxGallery;
