import './index.scss'
import './short.scss'
import Header from './components/Header';
import Header2 from './components/Header2';
import Catalog from './components/Catalog';

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

      <div className="ml45 df">
        <div className="catalog">
          <h1>Каталог</h1>
          {catalogList.map((obj, index) => (
            <Catalog catalogName={obj.name} key={index}/>))}
        </div>
      <div className="mainBanner">
        <img src="./img/mainbanner.svg" alt="Lamp" width="422px" height="380px" />
        <div className="mainBannerRight">
          <div className="mainBannerH1">
            <h1>Потолочные светодиодные светильники</h1>
          </div>
          <h3>Блеск и роскошь в интерьере!</h3>
          <a href="/catalog">В каталог</a>
          <div className="mainBannerCardBlock">

          <div className="mainBannerCard">
              <div className="mainBannerCardImg">
                <img src="./img/cardimg1.svg" alt="Maytoni"/>
              </div>
              <div className="mainBannerCardContent">
                <h5>Потолочный светильник Maytoni MOD058CL-L65B4K</h5>
                <span>11790 грн.</span>
              </div>
            </div>

            <div className="mainBannerCard">
              <div className="mainBannerCardImg">
                <img src="./img/cardimg1.svg" alt="Maytoni"/>
              </div>
              <div className="mainBannerCardContent">
                <h5>Потолочный светильник Maytoni MOD058CL-L65B4K</h5>
                <span>11790 грн.</span>
              </div>
            </div>

            <div className="mainBannerCard">
              <div className="mainBannerCardImg">
                <img src="./img/cardimg1.svg" alt="Maytoni"/>
              </div>
              <div className="mainBannerCardContent">
                <h5>Потолочный светильник Maytoni MOD058CL-L65B4K</h5>
                <span>11790 грн.</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      </div>

    <div className=""></div>

    </div>
  );
}

export default App;
