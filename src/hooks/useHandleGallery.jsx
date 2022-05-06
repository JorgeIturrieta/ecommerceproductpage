import React, { useState } from 'react';

const useHandleGallery = (active) => {
    const [currentImage, setCurrentImage] = useState(active);

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
    const handlePage = (index) => {
        // handle swipe buttons
        if (index === -1 && currentImage === 0) return;
        if (index === 1 && currentImage === 3) return;

        setCurrentImage(currentImage + index);
    };

    const handleDirectAccess = (index) => {
        if (currentImage === index) return;

        setCurrentImage(index);
    };

    return { currentImage, setCurrentImage, handlePage, handleDirectAccess };
};

export default useHandleGallery;
