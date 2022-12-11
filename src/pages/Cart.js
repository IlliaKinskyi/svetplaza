import React from 'react';
import CartCard from '../components/CartCard';
import PagesMainBar from '../components/PagesMainBar';
import { useCart } from '../hooks/useCart';
import axios from 'axios';

const Cart = ({ onRemoveFromCard }) => {
  const { cartItems, setCartItems, totalPrice, totalOldPrice, delay } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);

  const renderCartItems = () => {
    return cartItems.map((item, id) => (
      <CartCard {...item} key={id} onRemove={(obj) => onRemoveFromCard(obj)} />
    ));
  };

  const onClickOrder = async () => {
    try {
      const { data } = await axios.post('https://63091d01f8a20183f76ec73c.mockapi.io/orders', {
        items: cartItems,
      });

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://63091d01f8a20183f76ec73c.mockapi.io/cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Ошибка при создании заказа');
      console.log('Ошибка при создании заказа');
    }
  };

  return (
    <div className="cart">
      <PagesMainBar header={'Корзина'} array={cartItems} />

      {isOrderComplete ? (
        <div className="cart-final">
          <img src="./img/order-complete.svg" alt="Order complete" />
          <h4>Заказ №{orderId} оформлен. Спасибо!</h4>
          <span>В ближайшее время мы свяжемся с вами</span>
        </div>
      ) : (
        <div>
          {' '}
          {cartItems.length > 0 ? (
            <div className="cart-main">
              <div className="cart-content">{renderCartItems()}</div>

              <div className="ordering">
                <h3>Доставка и оплата</h3>
                <select name="delivery" id="delivery">
                  <option value="">Выберите способ доставки</option>
                </select>
                <select name="delivery" id="delivery">
                  <option value="">Выберите способ оплаты</option>
                </select>
                <input type="text" placeholder="Введите промокод" />
                <button type="submit" className="button__white">
                  Применить
                </button>

                <h1>О заказе</h1>
                <table>
                  <tbody>
                    <tr>
                      <td className="order-td__left">Товары ({cartItems.length})</td>
                      <td className="order-td__right" style={{ color: '#333333' }}>
                        {totalPrice} грн.
                      </td>
                    </tr>
                    <tr>
                      <td className="order-td__left">Скидки на товары</td>
                      <td className="order-td__right" style={{ color: '#DF5A5A' }}>
                        {totalOldPrice} грн.
                      </td>
                    </tr>
                    <tr>
                      <td className="order-td__left">Стоимость доставки</td>
                      <td className="order-td__right" style={{ color: '#15616D' }}>
                        Бесплатно
                      </td>
                    </tr>
                    <tr>
                      <td className="order-td__left">Итого</td>
                      <td className="total-price">{totalPrice} грн.</td>
                    </tr>
                  </tbody>
                </table>

                <div className="ordering__bottom">
                  <button
                    className="button__green"
                    style={{ cursor: 'pointer' }}
                    onClick={onClickOrder}>
                    Оформить заказ
                  </button>
                  <a href="/">Продолжить покупки</a>
                </div>
              </div>
            </div>
          ) : (
            <div className="cart-final">
              <img src="./img/cart-empty.svg" alt="Корзина пуста" />
              <h4>Ваша корзина пуста</h4>
              <span>Перейдите на главную страницу и начинайте покупки сейчас!</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
