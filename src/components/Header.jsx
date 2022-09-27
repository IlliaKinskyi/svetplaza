import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header-line">
            <div className="ml45 mt10 df">
                <img src="./img/clock.svg" alt="Clock" width="16px" height="16px" className="mr5"/>
                10:00 - 19:30
            </div>
            <div className="ml60 mt10 df">
                <img src="./img/mail.svg" alt="Mail to" width="16px" height="16px" className="mr5"/>
                <a href="mailto: info@svetplaza.ua">ilyakinskiy@gmail.com</a>
            </div>
            <div className="ml60 mt10 df">
                <img src="./img/phone.svg" alt="Phone" width="16px" height="16px" className="mr5"/>
                <a href="tel:+380990041179">+38 099 00 41 179</a>
            </div>
            </div>
        </div>
    );
};

export default Header;