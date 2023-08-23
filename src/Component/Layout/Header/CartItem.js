import React, { useContext } from "react";
import NumberWithCommas from "../../Provider/NumberWithCommas";
import { HiOutlineTrash } from "react-icons/hi";
import Fluctuation from "../../UI/Fluctuation";
import { CartContext } from "../../../store/cart-context";

const CartItem = (props) => {
  const {
    productName,
    productImg,
    productOriPrice,
    productPrice,
    specId,
    specName,
    stock,
    selectedQuantity,
  } = props.item;
  
  const cartCtx = useContext(CartContext);
  const { addToCart, removeToCart } = cartCtx;


  const quantityHandler = (fluctuation) => {
    if (fluctuation === "decrease") {
      removeToCart(specId);
    } else if (fluctuation === "increase") {
      if (selectedQuantity < stock) {
        addToCart({ ...props.item, selectedQuantity: 1 });
      }
    } else if (fluctuation === "delete") {
      removeToCart({ specId, selectedQuantity: 0 });
    }
  };

  const getUserInputValue = (e) => {
    e.preventDefault();
  };

  return (
    <li className="product__list">
      <div className="pic">
        <img src={require(`../../../assets/img/${productImg}`)} alt={productName} />
      </div>
      <div className="txt">
        <h2>{productName}</h2>
        <p className="spec">{`－ ${specName}`}</p>
        <div className="price__box">
          {productOriPrice && (
            <p className="ori__price">
              <s>NT${NumberWithCommas(productOriPrice)}</s>
            </p>
          )}
          <p className="price">NT${NumberWithCommas(productPrice)}</p>
        </div>
        <div className="quantity">
          <Fluctuation
            onIncrease={() => quantityHandler("increase")}
            onDecrease={() => quantityHandler("decrease")}
            onGetUserInputValue={getUserInputValue}
            onInputValue={selectedQuantity}
            disabled="disabled"
          />
          <div className="delete" onClick={() => quantityHandler("delete")}>
            <span className="icon">
              <HiOutlineTrash />
            </span>
          </div>
        </div>
        <div className="total__amount">
          <p>NT${NumberWithCommas(productPrice * selectedQuantity)}</p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
