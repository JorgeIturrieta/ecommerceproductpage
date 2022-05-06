import React, { useContext } from 'react';
import { images } from '../../constants';
import { CartContext } from '../../store/CartContext';
import { types } from '../../types/types';

const Cart = () => {
    const { price, amount, dispatch } = useContext(CartContext);

    const removeProduct = () => {
        dispatch({ type: types.removeProduct });
    };
    return (
        <div className="cart-container">
            <img
                className="header__profile-cart-img"
                src={images.iconCart}
                alt="icon-cart"
            />
            {price ? (
                <div className="header__profile-cart-count">{amount}</div>
            ) : null}

            <div className="cart-modal-wrapper">
                <div className="cart-modal">
                    <div className="cart-modal__header">Cart</div>
                    {price ? (
                        <>
                            <div className="cart-modal__body">
                                <div className="cart-product-img">
                                    <img
                                        src={images.imageProductThumbnail1}
                                        alt="thumbnail-product"
                                    />
                                </div>
                                <div className="cart-product-desc">
                                    <p>Fall Limited Edition Sneakers </p>
                                    <span>$125.00 x {amount}</span>
                                    <span className="total-price">
                                        {' '}
                                        ${price}.00
                                    </span>
                                </div>
                                <div
                                    className="cart-product-delete"
                                    role="button"
                                    onClick={removeProduct}
                                >
                                    <img
                                        src={images.iconDelete}
                                        alt="thumbnail-product"
                                    />
                                </div>
                            </div>
                            <div className="cart-modal__footer">
                                <div className="cart-btn" role="button">
                                    <span>Checkout</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="cart-modal__body">
                            <p className="cart-empty">Your cart is empty.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
