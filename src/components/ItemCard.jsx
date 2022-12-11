import React from 'react';
import AppContext from '../context';

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
  onPlus,
  onFavorite,
  favorited = false
}) => {

  const { isItemFavorite } = React.useContext(AppContext)
  const [isFavorite, setIsFavorite] = React.useState(favorited)

  const obj = {itemId: id, id, name, diameter, height, lampQty, lampType, oldPrice, price, image}

  const onClickPlus = () => {
    onPlus(obj)
  }

  const onClickFavorites = () => {
    onFavorite(obj)
    setIsFavorite(!isFavorite)
  }


    return (
        <div className="item-card">
            <img
              src={image}
              alt={name}
              width="260px"
              height="200px"
            />
            <div className="item-card__info">
              <h6>{name}</h6>
              <table className="table">
                <tbody>
                <tr>
                  <td className="table-td__left">Диаметр, мм</td>
                  <td className="table-td__right">{diameter}</td>
                </tr>
                <tr>
                  <td className="table-td__left">Высота, мм</td>
                  <td className="table-td__right">{height}</td>
                </tr>
                <tr>
                  <td className="table-td__left">Кол-во ламп</td>
                  <td className="table-td__right">{lampQty}</td>
                </tr>
                <tr>
                  <td className="table-td__left">Тип лампы</td>
                  <td className="table-td__right">{lampType}</td>
                </tr>
                </tbody>
              </table>
              <p>{oldPrice ? oldPrice + ' грн.' : ' '}</p>

              <div className="item-place__footer">
                <button onClick={onClickPlus}> 
                  <img src="./img/itemcart.svg" alt="Add to cart"/>
                  <img src="./img/itemcartline.svg" alt="Line"/>
                  {price} грн
                </button>

                <img src={
                  isItemFavorite(id)
                  ? "./img/heart-active.svg"
                  : "./img/heart.svg"
                  } alt="Add to Favorite" width="25px" height="25px" style={{position: 'absolute', right: '14px', bottom: '2px', cursor: 'pointer'}} onClick={onClickFavorites}/>
              </div>

            </div>
          </div>
    );
};

export default ItemCard;