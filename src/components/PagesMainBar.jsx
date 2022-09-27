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
            <div className="mainBar">
                <a href='/' className="main">Главная</a>
                <img src="./img/ellipse.svg" alt="Ellipse" width="4px" height="4px"></img>
                <span className="mainCart">{header}</span>
            </div>
            <div className="mainBarHeader">
                <h1 className="cartHeaderH1">{header}</h1>
                <span className="mainBarHeaderItemQty">{array.length} {getItemQtyDeclination()}</span>
            </div>
        </div>
    );
};

export default PagesMainBar;