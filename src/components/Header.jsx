import React from 'react';
import { useCart } from '../hooks/useCart';

const Header = ({onChange}) => {
  
  const { totalPrice } = useCart()
  
  const searchValueChange = (event) => {
    onChange(event.target.value)
  }

    return (
        <div className="header">
          <div>
              <a href="/">
                <img src="./img/logo.svg" alt="Logo" height="30%" className='ml45 mt27'/>
              </a>
          </div>
      
          <div className="header__search ml100">
            <input 
              type="search" 
              placeholder="Введите название товара" 
              onChange={searchValueChange}
            />
          </div>

          <div className="header__right">
            <a href="/favorites">
            <img src="./img/heart.svg" width="25px" height="25px" alt="Favorites" />
            </a>
            <a href="/cart">
              <img src="./img/cart.svg" width="30px" height="30px" alt="Favorites" className="ml25"/>
              <span className="ml15">{totalPrice} грн.</span>
            </a>
          </div>

      </div>
    );
};

export default Header;