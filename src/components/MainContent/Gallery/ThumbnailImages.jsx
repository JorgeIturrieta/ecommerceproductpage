import React, { useEffect, useState } from 'react';
import { images } from '../../../constants';
const ThumbnailImages = ({ handleDirectAccess, name, defaultValue }) => {
    const initialState = [
        { id: 0, item: images.imageProductThumbnail1, active: false },
        { id: 1, item: images.imageProductThumbnail2, active: false },
        { id: 2, item: images.imageProductThumbnail3, active: false },
        { id: 3, item: images.imageProductThumbnail4, active: false }
    ];
    const [imagesThumbnail, setImagesThumbnail] = useState(initialState);
    useEffect(() => {
        setImagesThumbnail(
            imagesThumbnail.map((img) =>
                img.id === defaultValue
                    ? { ...img, active: true }
                    : { ...img, active: false }
            )
        );
    }, [defaultValue]);

    return (
        <div className="thumbnail-container">
            {imagesThumbnail.map((image) => (
                <div
                    className={`item-thumbnail ${image.active ? 'active' : ''}`}
                    key={image.id}
                    onClick={() => handleDirectAccess(image.id)}
                >
                    {/* <input
                        type="radio"
                        id={`${name}product${id}`}
                        name={name}
                        defaultChecked={id === defaultValue}
                    />
                    <label
                        htmlFor={`${name}product${id}`}
                        onClick={() => handleDirectAccess(id)}
                    >
                        <img src={image.item} alt={`img-thumbail-${id}`} />
                    </label> */}

                    <img src={image.item} alt={`img-thumbail-${image.id}`} />
                </div>
            ))}
        </div>
    );
};

export default ThumbnailImages;
