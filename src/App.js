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

  const searchValueChange = (searchValue) => {
    setSearchValue(searchValue)
  }

  return (
    <div className="App">

      <Header/>
      <Header2 onChange={searchValueChange}/>

      <Routes>
        <Route path="/" element={<Home 
        catalogItems={catalogItems}
        filteredItems={filteredItems}
        />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    
    </div>
  );
}

export default App;
