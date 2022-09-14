import React from 'react';

const Header2 = ({onChange}) => {
  
  const searchValueChange = (event) => {
    onChange(event.target.value)
  }

    return (
        <div className="header2">
          <div>
              <a href="/">
                <img src="./img/logo.svg" alt="Logo" height="30%" className='ml45 mt27'/>
              </a>
          </div>
      
          <div className="search ml100">
            <input 
              type="search" 
              placeholder="Введите название товара" 
              onChange={searchValueChange}
            />
            <button>Поиск</button>
          </div>

          <div className="header2-right">
            <img src="./img/heart.svg" width="25px" height="25px" alt="Favorites" />
            <a href="/cart">
              <img src="./img/cart.svg" width="30px" height="30px" alt="Favorites" className="ml25"/>
              <span className="ml15">278900,50 грн</span>
            </a>
          </div>

      </div>
    );
};

export default Header2;