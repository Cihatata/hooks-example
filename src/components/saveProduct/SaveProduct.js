import React, {useEffect, useState} from 'react';
import './SaveProduct.css';
import { connect } from 'react-redux';

function validate(param) {
  console.log('param', param)
  for (let i = 0; i < param.length; i += 1) {
    if(param[i] === '') return false;
  }

  return true;
}

function SaveProduct(props) {
  const [productName, setProductName] = useState("");
  const [value, setValue] = useState("");
  const [size, setSize] = useState("s");

  return (
    <div className="save-product">

      <button
        className="save-product__back-btn"
        onClick={() => props.history.push('/')}
      >
        Ürünlere dön
      </button>
      <div className="save-product__container">
        <input
          type="text"
          placeholder="ürün Adı"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
        />
        <input
          type="text"
          placeholder="değeri"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />

        <select value={size} id="" onChange={(event) => setSize(event.target.value)}>
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

        <button
          onClick={() => {
            if (validate([productName, value, size])) {
              props.addProduct({productName, value, size});
              setProductName('');
              setValue('');
              setSize('s');
              props.setNotificationMessage('Kaydedildi');
            } else {
              props.setNotificationMessage('Kaydedilemedi!!!');
            }
          }}
        >
          Ekle
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(store) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    addProduct: (data) => dispatch({ type: 'ADD_PRODUCT', data: data}),
    setNotificationMessage: (data) => dispatch({ type: 'SET_NOTIFICATION_MESSAGE', data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveProduct);
