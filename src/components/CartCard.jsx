import React from 'react';

const CartCard = ({
    id,
    itemId,
    name,
    oldPrice,
    price,
    image,
    onRemove
}) => {

const obj = {itemId, id}

const onClickRemove = () => {
    onRemove(obj)
}

return (
    <div className="cart-card">
                <img src={image} alt="item" className="cart-card__img" />

                <div className="cart-descriptions">
                    <h5 className="cart-descriptions__header">{name}</h5>
                    <span className="cart-descriptions__qty">на складе 35 шт</span>
                </div>
                <div className="cart-card__qty">
                    <img src="./img/minus.svg" alt="minus"/>
                    <span>1</span>
                    <img src="./img/plus.svg" alt="minus"/>
                </div>
                <div className="cart-card__price">
                    {price} грн.
                    <span>{oldPrice ? (oldPrice + ' грн.') : ''} </span>
                </div>
                <div className="cart-card__right">
                    <img src="./img/heart-light.svg" alt="Add to Favorite"/>
                    <img src="./img/x.svg" alt="Remove" onClick={onClickRemove} style={{cursor: "pointer"}}/>
                </div>
            </div>
    );
};

export default CartCard;