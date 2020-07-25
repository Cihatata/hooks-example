import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import I from 'immutable';
import ProductCard from "./ProductCard";

function Products(props) {
  const [renderProductList, setRenderProductList] = useState(props.productList);

  useEffect(() => {
    const newRenderList = props.productList.filter((each) => {
      console.log(each.get('productName', ''), each.get('value', ''))
      if (
        each.get('productName', '').includes(props.filterValues.get('filterName', ''))
        && each.get('value', '') < props.filterValues.getIn(['price', 'priceRangeHighest'], 1000)
        && each.get('value', '') > props.filterValues.getIn(['price', 'priceRangeLowest'], 0)
        && each.get('size', '').includes(props.filterValues.get('filterSize', ''))
      ) {
        console.log('aa')
        return true;
      }

      return false;

    });
    console.log('newList', newRenderList);
    setRenderProductList(newRenderList);
  }, [props.filterValues, props.productList])

  return (
    <div className="products">
      {
        renderProductList.size > 0
          ? (
            <div className="products__products-container">
              {
                renderProductList.map((each) => {
                  return (
                    <ProductCard
                      key={each.get('id', '')}
                      card={each}
                    />
                  )
                })
              }
            </div>
          )
          : (<div>Hiç ürün yok</div>)
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    productList: state.get('productList', I.List()),
    filterValues: state.get('filterValues', I.Map()),
  }
}

export default connect(mapStateToProps)(Products);
