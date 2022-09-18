import React from 'react';
import CartItemCard from '../components/CartItemCard';
import { useCart } from '../hooks/useCart';

const Cart = ({onRemoveFromCard}) => {
  const { cartItems, setCartItems, totalPrice } = useCart()
    const renderCartItems = () => {
        return cartItems.map((item, id) => (
            <CartItemCard 
            {...item}
            key={id}
            onRemove={(obj) => onRemoveFromCard(obj)}
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

            <div className="cartOrdering">
                <h3>Доставка и оплата</h3>
                <select name="delivery" id="delivery">
                    <option value="">Выберите способ доставки</option>
                </select>
                <select name="delivery" id="delivery">
                    <option value="">Выберите способ оплаты</option>
                </select>
                <input type="text" placeholder="Введите промокод" 
                />
                <button type="submit" className="whiteButton">Применить</button>

                <h1>О заказе</h1>
                <table>
                    <tbody>
                        <tr>
                            <td className="tdleft">Товары ({cartItems.length})</td>
                            <td className="tdright" style={{color: '#333333'}}>{totalPrice} грн.</td>
                        </tr>
                        <tr>
                            <td className="tdleft">Скидки на товары</td>
                            <td className="tdright" style={{color: '#DF5A5A'}}>3080</td>
                        </tr>
                        <tr>
                            <td className="tdleft">Стоимость доставки</td>
                            <td className="tdright" style={{color: '#15616D'}} >Бесплатно</td>
                        </tr>
                        <tr>
                            <td className="tdleft">Итого</td>
                            <td className="totalPrice">{totalPrice} грн.</td>
                        </tr>
                    </tbody>
                </table>

                <div className="cartOrderingBottom">
                    <button className="greenButton">Перейти к оформлению</button>
                    <a href="/">Продолжить покупки</a>
                </div>
            </div>
        </div>

        </div>
    );
};

export default Cart;