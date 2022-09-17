import React from "react";
import "./index.scss";
import "./short.scss";
import Header from "./components/Header";
import {
  Routes,
  Route
} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Header2 from "./components/Header2";
import axios from "axios";
import AppContext from "./context";

function App() {
  const [catalogItems, setCatalogItems] = React.useState([]);
  const [cardItems, setCardItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse] = await Promise.all([axios.get('https://63091d01f8a20183f76ec73c.mockapi.io/cart'), axios.get('https://63091d01f8a20183f76ec73c.mockapi.io/favorites')])

        setCartItems(cartResponse.data)
        setFavorites(favoritesResponse.data)
      } catch (error) {
        alert('Ошибка при запросе данных')
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(item => Number(item.itemId) === Number(obj.itemId))
      if (findItem) {
        alert('Товар уже в корзине')
      } else {
        setCartItems(prev => [...prev, obj])
        const {data} = await axios.post('https://63091d01f8a20183f76ec73c.mockapi.io/cart', obj)
        setCartItems(prev => prev.map(item => {
          if (item.itemId === data.itemId) {
            return {
              ...item,
              itemId: data.itemId
            }
          }
        return item
        }))
        alert('Товар добавлен в корзину')
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину')
      console.error(error)
    }
  }

  React.useEffect(() => {
    try {
      fetch("https://63091d01f8a20183f76ec73c.mockapi.io/Catalog")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setCatalogItems(json);
        });
    } catch (error) {
      console.log("Ошибка загрузки каталога");
    }
  }, []);

  React.useEffect(() => {
    try {
      fetch("https://63091d01f8a20183f76ec73c.mockapi.io/item")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setCardItems(json);
        });
    } catch (error) {
      console.log("Ошибка загрузки товаров");
    }
  }, []);

  const filteredItems = cardItems.filter(item => {
    return item.name.toLowerCase().includes(searchValue.toLowerCase())
  })

  const searchValueChange = (searchValue) => {
    setSearchValue(searchValue)
  }

  const onDeleteFromCard = (obj) => {
    try {
      setCartItems(prev => prev.filter(item => Number(item.itemId) !== Number(obj.itemId)))
      axios.delete(`https://63091d01f8a20183f76ec73c.mockapi.io/cart/${obj.itemId}`)
    } catch (error) {
      alert('Ошибка при удалении из корзины')
      console.erroe(error)
    }
    

  }

  return (
    <AppContext.Provider value={{ catalogItems, cartItems, favorites, onAddToCart, setCartItems }}>
    <div className="App">

      <Header/>
      <Header2 onChange={searchValueChange}/>

      <Routes>
        <Route path="/" element={<Home 
        catalogItems={catalogItems}
        filteredItems={filteredItems}
        onAddToCart={onAddToCart}
        />}/>
        <Route path="/cart" element={<Cart cartItems={cartItems} onDeleteFromCard={onDeleteFromCard}/>} />
      </Routes>

    
    </div>
    </AppContext.Provider>
  );
}

export default App;
