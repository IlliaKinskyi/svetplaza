import React from 'react';

const ItemCard = (props) => {
    return (
        <div className="itemCard">
            <img
              src={props.itemImage}
              alt={props.itemName}
              width="260px"
              height="200px"
            />
            <div className="itemCardInfo">
              <h6>{props.itemName}</h6>
              <table className="itemTable">
                <tr>
                  <td className="itemTdLeft">Диаметр, мм</td>
                  <td className="itemTdRight">{props.itemDiameter}</td>
                </tr>
                <tr>
                  <td className="itemTdLeft">Высота, мм</td>
                  <td className="itemTdRight">{props.itemHeight}</td>
                </tr>
                <tr>
                  <td className="itemTdLeft">Кол-во ламп</td>
                  <td className="itemTdRight">{props.itemLampQty}</td>
                </tr>
                <tr>
                  <td className="itemTdLeft">Тип лампы</td>
                  <td className="itemTdRight">{props.itemLampType}</td>
                </tr>
              </table>
              <p>{props.itemOldPrice} грн</p>

              <div className="itemPlaceFooter">
                <button> 
                  <img src="./img/itemcart.svg" alt="Add to cart"/>
                  <img src="./img/itemcartline.svg" alt="Line"/>
                  {props.itemPrice} грн
                </button>

                <img src="./img/heart.svg" alt="Add to Favorite" width="25px" height="25px" style={{position: 'absolute', right: '14px', bottom: '2px', cursor: 'pointer'}}/>
              </div>

            </div>
          </div>
    );
};

export default ItemCard;