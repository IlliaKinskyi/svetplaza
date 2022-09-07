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
import AppContext from "./context";

function App() {
  const [catalogItems, setCatalogItems] = React.useState([]);
  const [cardItems, setCardItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('')

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

  return (
    <AppContext.Provider value={{catalogItems,cardItems,setCatalogItems,setCardItems,searchValue,setSearchValue}}>
    <div className="App">

    

      <Header />

      <div className="header2">
        <div>
            <a href="/">
              <img src="./img/logo.svg" alt="Logo" height="30%" className='ml45 mt27'/>
            </a>
        </div>
    
        <div className="search ml100">
          <input 
            type="search" 
            placeholder="Введите название товара" 
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button>Поиск</button>
        </div>

        <div className="header2-right">
          <a href="/cart">
            <img src="./img/heart.svg" width="25px" height="25px" alt="Favorites" />
            <img src="./img/cart.svg" width="30px" height="30px" alt="Favorites" className="ml25"/>
            <span className="ml15">278900,50 грн</span>
          </a>
        </div>

      </div>

      <Routes>
        <Route path="/" element={<Home
          catalogItems={catalogItems}
          cardItems={cardItems}
          setCatalogItems={setCatalogItems}
          setCardItems={setCardItems}
          filteredItems={filteredItems}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />}/>
        <Route path="/cart" element={<Cart />} />
    </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
