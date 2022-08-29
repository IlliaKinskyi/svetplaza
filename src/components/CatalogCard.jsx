import React from 'react';

const CatalogCard = (props) => {
    return (
        <div className="catalogCard">
            <h1>{props.catalogName}</h1>
            <span>{props.catalogItemQty} Товаров</span>
            <img src={props.catalogItemImg} alt={props.catalogName}/>
        </div>
    );
};

export default CatalogCard;