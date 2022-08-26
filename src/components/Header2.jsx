import React from 'react';

const Header2 = () => {
    return (
        <div className="header2">
                <div>
                    <img src="./img/logo.svg" alt="Logo" height="30%" className='ml45 mt27'/>
                </div>
            
                <div className="search ml100">
                    <input type="search" placeholder="Введите название товара" />
                    <button>Поиск</button>
                </div>

            <div className="header2-right ">
                    <img src="./img/heart.svg" width="25px" height="25px" alt="Favorites" />
                    <img src="./img/cart.svg" width="30px" height="30px" alt="Favorites" className="ml25"/>
                    <span className="ml15">278900,50 грн</span>
            </div>

        </div>
    );
};

export default Header2;