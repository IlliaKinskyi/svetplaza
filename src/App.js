import './index.scss'
import './short.scss'
import Header from './components/Header';
import Header2 from './components/Header2';
import Catalog from './components/Catalog';
import axios from "axios";

function App() {
  const catalogList = [
      {
        "name": "Люстры потолочные"
      },
      {
        "name": "Люстры подвесные"
      },
      {
        "name": "Большие люстры"
      },
      {
        "name": "Кованые светильники"
      },
      {
        "name": "Светильники тиффани"
      },
      {
        "name": "Деревянные светильники"
      },
      {
        "name": "Детские светильники"
      },
      {
        "name": "Подвесные светильники"
      },
      {
        "name": "Потолочные светильники"
      },
      {
        "name": "Светильники для ванной"
      },
      {
        "name": "Споты и трековые светильники"
      },
      {
        "name": "Детские светильники"
      },
      {
        "name": "Точечные светильники"
      },
      {
        "name": "Уличные светильники"
      },
      {
        "name": "Бра"
      },
      {
        "name": "Картинная подсветка"
      },
      {
        "name": "Торшеры"
      }
    ]
  return (
    <div className="App">
      <Header/>
      <Header2/>
      
    <div className="catalog">
      <h1>Каталог</h1>
      {catalogList.map((obj, index) => (
        <Catalog catalogName={obj.name} key={index}/>))}
    </div>
    </div>
  );
}

export default App;
