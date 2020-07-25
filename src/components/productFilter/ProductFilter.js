import React, {useState} from 'react';
import './ProductFilter.css';
import { connect } from "react-redux";

function FilterProduct(props) {
  const [filterName, setFilterName] = useState('');
  const [priceRangeLowest, setPriceRangeLowest] = useState(0);
  const [priceRangeHighest, setPriceRangeHighest] = useState(1000);
  const [filterSize, setFilterSize] = useState('');
  return (
    <div className="product-filter">

      <div className="product-filter__row product-filter__name">
        <div>İsme göre filtrele</div>
        <input
          type="text"
          placeholder="ismi filtrele"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />
      </div>

      <div className="product-filter__row product-filter__price-range">
        <div>Fiyata göre filtrele</div>
        <div className="product-filter__price-range__inputs">
          <input
            type="number"
            placeholder="Minimum fiyat"
            value={priceRangeLowest}
            onChange={(e) => setPriceRangeLowest(e.target.value)}
          />
          <input
            type="number"
            placeholder="Maximum fiyat"
            value={priceRangeHighest}
            onChange={(e) => setPriceRangeHighest(e.target.value)}
          />

        </div>
      </div>

      <div className="product-filter__row product-filter__size">
        <div>Size a göre filtrele</div>
        <select value={filterSize} id="" onChange={(event) => setFilterSize(event.target.value)}>
          {
            ['s', 'm', 'l'].map((each) => (
              <option
                key={each}
                value={each}
              >
                {each}
              </option>
            ))
          }
        </select>
      </div>

      <button
        onClick={() => props.setFilterValues({
          filterName,
          price: { priceRangeHighest, priceRangeLowest},
          filterSize
        })}
      >
        Filtrele
      </button>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    setFilterValues: (data) => dispatch({ type: 'SET_FILTER_VALUES', data })
  }
}

export default connect(null, mapDispatchToProps)(FilterProduct)