import React, { useContext, useState } from 'react';
import { images } from '../../constants';
import { CartContext } from '../../store/CartContext';
import { types } from '../../types/types';
const Description = () => {
    const [count, setCount] = useState(0);
    const { price, amount, dispatch } = useContext(CartContext);

    const handleCount = (number) => {
        if (number == -1 && count === 0) return;
        setCount(count + number);
    };

    const handleCart = () => {
        if (count === 0) return;
        dispatch({
            type: types.addProduct,
            payload: {
                price: price + 125 * count,
                amount: amount + count
            }
        });
        setCount(0);
    };
    return (
        <div className="main__description">
            <h1 className="description-title">Sneaker Company</h1>
            <h2 className="description-title-product">
                Fall Limited Edition Sneakers
            </h2>
            <p className="description-product">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
            </p>
            <div className="price-container">
                <div className="price-container__main-price">
                    <span className="price">$125.00</span>
                    <span className="discount">50%</span>
                </div>
                <span className="price-container__old-price">$250.00</span>
            </div>
            <div className="cart-control">
                <div className="ammount-container">
                    <img
                        role="button"
                        src={images.iconMinus}
                        alt="icon-minus"
                        onClick={() => handleCount(-1)}
                    />

                    <span>{count}</span>
                    <img
                        role="button"
                        src={images.iconPlus}
                        alt="icon-plus"
                        onClick={() => handleCount(1)}
                    />
                </div>
                <div className="cart-btn" role="button" onClick={handleCart}>
                    <img src={images.iconCart} alt="cart-icon" />
                    <span>Add to cart</span>
                </div>
            </div>
        </div>
    );
};

export default Description;
