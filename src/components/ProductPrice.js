import React from 'react';

const ProductPrice = (props) => {
    return (
        <div className="product__price">
            {props.attributes.Price} {props.currency}
        </div>
    );
}

export default ProductPrice;
