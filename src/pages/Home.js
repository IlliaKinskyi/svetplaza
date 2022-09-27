import React from 'react';
import ItemCard from "../components/ItemCard";

const Home = (
    {filteredItems, onAddToCart, onAddToFavorite}
) => {
    const renderItems = () => {
        return filteredItems.map((item, id) => (
            <ItemCard 
            {...item}
            onPlus={(obj) => onAddToCart(obj)}
            onFavorite={(obj) => onAddToFavorite(obj)}
            key={id}
            />
            ))
    }
    return (
        <div className="itemPlace ml40">
                {renderItems()}
        </div>
    );
};

export default Home;