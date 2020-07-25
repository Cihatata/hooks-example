import React from 'react';
import { connect } from 'react-redux';
import I from 'immutable';

function Products(props) {


  return (
    <div className="products">
      {
        props.productList.size > 0 ? (<div>Mustafa</div>) : (<div>bulunamadı</div>)
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    productList: state.get('productList', I.List()),
  }
}

export default connect(mapStateToProps)(Products);
