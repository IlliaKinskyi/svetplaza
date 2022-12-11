import React from 'react';

const PagesMainBar = ({header, array}) => {

    function getItemQtyDeclination() {
        const headerItemQty = array.length
        if (headerItemQty === 1) {
            return 'товар'
        } else if (headerItemQty === 2) {
            return 'товара'
        } else if (headerItemQty === 3) {
            return 'товара'
        } else if (headerItemQty === 4) {
            return 'товара'
        } else {
            return 'товаров'
        }
    }

    return (
        <div>
            <div className="bar">
                <a href='/' className="main">Главная</a>
                <img src="./img/ellipse.svg" alt="Ellipse" width="4px" height="4px"></img>
                <span className="bar-cart">{header}</span>
            </div>
            <div className="bar-header">
                <h1 className="bar-header__h1">{header}</h1>
                <span className="bar-header__qty">{array.length} {getItemQtyDeclination()}</span>
            </div>
        </div>
    );
};

export default PagesMainBar;