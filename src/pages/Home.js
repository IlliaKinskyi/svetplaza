import React from 'react';
import Catalog from "../components/Catalog";
import MainBannerCard from "../components/MainBannerCard";
import CatalogCard from "../components/CatalogCard";
import ItemCard from "../components/ItemCard";

const Home = (
    {catalogItems, filteredItems}
) => {
    return (
        <div>
            <div className="middleBlock">
                <div className="catalog">
                <h1>Каталог</h1>
                {catalogItems.map((obj, id) => (
                    <Catalog catalogName={obj.name} key={id} />
                ))}
                </div>

            <div className="middleBlockRight">
                <div className="mainBanner">
                    <img
                    src="./img/mainbanner.svg"
                    alt="Lamp"
                    width="422px"
                    height="380px"
                />
                <div className="mainBannerRight">
                <div className="mainBannerH1">
                    <h1>Потолочные светодиодные светильники</h1>
                </div>
                <h3>Блеск и роскошь в интерьере!</h3>
                <a href="/catalog">В каталог</a>

                <div className="mainBannerCardBlock">
                    <MainBannerCard />
                    <MainBannerCard />
                    <MainBannerCard />
                </div>
                </div>
            </div>

            <div className="catalogDetailed">
                {catalogItems.slice(0, 6).map((obj) => (
                <CatalogCard
                    catalogName={obj.name}
                    catalogItemQty={obj.qty}
                    catalogItemImg={obj.img}
                />
                ))}
            </div>
            </div>
        </div>

        <div className="itemPlace">
            <div className="itemPlaceHeader">
            <h3>Акции и новинки</h3>
            <div className="itemPlaceHeaderButtons">
                <button>Распродажа</button>
                <button>Рекомендуемые</button>
                <button>Новинки</button>
            </div>
            </div>

            <div className="itemPlaceBlock">
            {filteredItems.map((obj, id) => (
                <ItemCard 
                itemName={obj.name} 
                itemId={obj.id}
                itemDiameter={obj.diameter}
                itemHeight={obj.height}
                itemLampQty={obj.lampQty}
                itemLampType={obj.lampType}
                itemOldPrice={obj.oldPrice}
                itemPrice={obj.price}
                itemImage={obj.image}
                key={obj.id}
                />
                ))}
            </div>
        </div>
        </div>
    );
};

export default Home;