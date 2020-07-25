import React from 'react';
import './Header.css';
import { withRouter } from 'react-router-dom';

function Header(props) {

  return (
    <div className="shopping-header">
      <div className="shopping-header__left">
        <button> Home </button>
      </div>
      <div className="shopping-header__right">
        <button
          className="shopping-header__right__one-elem"
          onClick={() => props.history.push('save-product')}
        >
          Ürün ekle
        </button>
        <button className="shopping-header__right__one-elem">Logout</button>
      </div>
    </div>
  );
}

export default withRouter(Header);
