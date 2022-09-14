import React from 'react';

const ItemCard = ({
  id,
  name,
  diameter,
  height,
  lampQty,
  lampType,
  oldPrice,
  price,
  image,
  onPlus
}) => {

  const obj = {itemId: id, name, diameter, height, lampQty, lampType, oldPrice, price, image}

  const onClickPlus = () => {
    onPlus(obj)
  }
    return (
        <div className="itemCard">
            <img
              src={image}
              alt={name}
              width="260px"
              height="200px"
            />
            <div className="itemCardInfo">
              <h6>{name}</h6>
              <table className="itemTable">
                <tbody>
                <tr>
                  <td className="itemTdLeft">Диаметр, мм</td>
                  <td className="itemTdRight">{diameter}</td>
                </tr>
                <tr>
                  <td className="itemTdLeft">Высота, мм</td>
                  <td className="itemTdRight">{height}</td>
                </tr>
                <tr>
                  <td className="itemTdLeft">Кол-во ламп</td>
                  <td className="itemTdRight">{lampQty}</td>
                </tr>
                <tr>
                  <td className="itemTdLeft">Тип лампы</td>
                  <td className="itemTdRight">{lampType}</td>
                </tr>
                </tbody>
              </table>
              <p>{oldPrice} грн</p>

              <div className="itemPlaceFooter">
                <button onClick={onClickPlus}> 
                  <img src="./img/itemcart.svg" alt="Add to cart"/>
                  <img src="./img/itemcartline.svg" alt="Line"/>
                  {price} грн
                </button>

                <img src="./img/heart.svg" alt="Add to Favorite" width="25px" height="25px" style={{position: 'absolute', right: '14px', bottom: '2px', cursor: 'pointer'}}/>
              </div>

            </div>
          </div>
    );
};

export default ItemCard;