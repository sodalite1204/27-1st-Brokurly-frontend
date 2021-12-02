import React, { useState } from 'react';
import './CartModal.scss';

function CartModal({ product, setCartInfo }) {
  const [quantity, setQuantity] = useState(1);
  const { name, price } = product;

  const closeModal = () => {
    setCartInfo({});
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const removeQuantity = () => {
    if (quantity === 1) {
      alert('최소 수량은 1개 입니다.');
      return;
    }
    setQuantity(quantity - 1);
  };

  const stopClickPropagation = e => {
    e.stopPropagation();
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modalContent" onClick={stopClickPropagation}>
        <div className="top">
          <div className="productName">{name}</div>
          <div className="productDetail">
            <div className="price">{Number(price).toLocaleString()}원</div>
            <div className="quantityContainer">
              <button className="down" onClick={removeQuantity}>
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button className="up" onClick={addQuantity}>
                +
              </button>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="totalContainer">
            <h3 className="totalText">합계</h3>
            <h2 className="total">
              {Number(quantity * price).toLocaleString()}
              <span className="unit">원</span>
            </h2>
          </div>
          <div className="btns">
            <button className="cancel btn" onClick={closeModal}>
              취소
            </button>
            <button className="addToCart btn">장바구니 담기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
