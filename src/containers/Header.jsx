import React, { useState } from 'react';
import Cart from '../components/Header/Cart';
import { images } from '../constants';

function Header() {
    const [toggle, setToggle] = useState(true);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    return (
        <header className="header">
            <div className="header__btn">
                <img
                    role="button"
                    onClick={handleToggle}
                    className={`header__btn-open ${!toggle ? 'hide' : ''}`}
                    src={images.iconMenu}
                    alt="hambuerguer-menu"
                />
                <img
                    role="button"
                    onClick={handleToggle}
                    className={`header__btn-close  ${toggle ? 'hide' : ''}`}
                    src={images.iconClose}
                    alt="close-menu"
                />

                <img
                    role="button"
                    className="header__btn-logo"
                    src={images.logo}
                    alt="logo"
                />
            </div>

            <div
                onClick={handleToggle}
                className={`overlay ${toggle ? 'hide' : ''}`}
            ></div>

            <nav className={`header__menu ${toggle ? 'slide' : ''}`}>
                <div className="menu-items">
                    <div className="item-1" role="button">
                        Collections
                    </div>
                    <div className="item-2" role="button">
                        Men
                    </div>
                    <div className="item-3" role="button">
                        Women
                    </div>
                    <div className="item-4" role="button">
                        About
                    </div>
                    <div className="item-5" role="button">
                        Contact
                    </div>
                </div>
            </nav>

            <div className="header__profile">
                <Cart />
                <img
                    role="button"
                    className="header__profile-profile-img"
                    src={images.imageAvatar}
                    alt="avatar"
                />
            </div>
        </header>
    );
}

export default Header;
