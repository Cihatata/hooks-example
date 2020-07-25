import React from 'react';
import './ProductCard.css'

function ProductCard(props) {

  return (
    <div className="product-card-wrapper">
      <div className="product-card-wrapper__top">
        {
          props.card.get('productName', '')
        }
      </div>
      <div className="product-card-wrapper__bottom">
        <div className="product-card__value">
          {
            props.card.get('value', '')
          }
        </div>
        <div className="product-card__size">
          {
            props.card.get('size', '')
          }
        </div>
      </div>
    </div>
  )
}

export default ProductCard;