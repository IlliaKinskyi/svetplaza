import React from 'react';
import CartItemCard from '../components/CartItemCard';

const Cart = ({cartItems, onDeleteFromCard}) => {
    const renderCartItems = () => {
        return cartItems.map((item, id) => (
            <CartItemCard 
            {...item}
            key={id}
            onDelete={(obj) => onDeleteFromCard(obj)}
            />
            ))
    }

    function getItemQtyDeclination() {
        const headerItemQty = cartItems.length
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
        <div className="cart">
            <div className="cartMainBar">
                <a href='/' className="cartMain">Главная</a>
                <img src="./img/ellipse.svg" alt="Ellipse" width="4px" height="4px"></img>
                <span className="cartMainCart">Корзина</span>
            </div>
            <div className="cartHeader">
                <h1 className="cartHeaderH1">Корзина</h1>
                <span className="cartHeaderItemQty">{cartItems.length} {getItemQtyDeclination()}</span>
            </div>

        <div className="cartMainBlock">
            <div className="cartBlock">
                {renderCartItems()}
            </div>

            <div>Доставка и оплата</div>
        </div>

        </div>
    );
};

export default Cart;