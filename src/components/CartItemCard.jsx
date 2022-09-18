import React from 'react';

const CartItemCard = ({
    id,
    itemId,
    name,
    oldPrice,
    price,
    image,
    onRemove
}) => {

    const obj = {itemId}

        const onClickRemove = () => {
            onRemove(obj)
        }

    return (
        <div className="cartItemCard">
                    <img src={image} alt="item" className="cartItemImg" />

                    <div className="cartItemText">
                        <h5 className="cartItemHeader">{name}</h5>
                        <span className="cartItemStockQty">на складе 35 шт</span>
                    </div>
                    <div className="cartItemQty">
                        <img src="./img/minus.svg" alt="minus"/>
                        <span>1</span>
                        <img src="./img/plus.svg" alt="minus"/>
                    </div>
                    <div className="cartItemPrice">
                        {price} грн.
                    </div>
                    <div className="cartItemRight">
                        <img src="./img/heart-light.svg" alt="Add to Favorite"/>
                        <img src="./img/x.svg" alt="Delete" onClick={onClickRemove} style={{cursor: "pointer"}}/>
                    </div>
                </div>
    );
};

export default CartItemCard;