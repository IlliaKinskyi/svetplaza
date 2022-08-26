import React from 'react';

const Catalog = (props) => {
    return (
        <div className="catalogList">
            {props.catalogName}
        </div>
    );
};

export default Catalog;