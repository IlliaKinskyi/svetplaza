import React from 'react';
import './index.scss'
import './short.scss'
import Header from './components/Header';
import Header2 from './components/Header2';
import Catalog from './components/Catalog';

function App() {
      const [catalogItems, setCatalogItems] = React.useState([])

      React.useEffect(() => {
        try {
          fetch('https://63091d01f8a20183f76ec73c.mockapi.io/Catalog')
          .then(res => {
            return res.json()
          })
          .then(json => {
            setCatalogItems(json)
          })
        } catch (error) {
          console.log('Ошибка загрузки каталога')
        }
      }, [])
      
   
  return (
    <div className="App">
      <Header/>
      <Header2/>

      <div className="middleBlock">
        <div className="catalog">
          <h1>Каталог</h1>
          {catalogItems.map((obj, index) => (
            <Catalog catalogName={obj.name} key={index}/>))}
        </div>

        <div className="middleBlockRight">
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

          <div className="catalogDetailed">
            <div className="catalogCard">

            </div>
            <div className="catalogCard">
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}

export default App;
