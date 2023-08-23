import React, { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { CartContext } from "../../../store/cart-context";
import PRODUCT_DATA from "../../../assets/product-data";

const ProductPurchase = () => {
  const cartCtx = useContext(CartContext);
  const { addToCart, productId, productSpecId, selectedQuantity } = cartCtx;

  const handleAddToCart = () => {
    const newItem = {
      productId,
      productSpecId,
      selectedQuantity,
    };

    const product = PRODUCT_DATA.find(
      (product) => product.id === newItem.productId
    );
    if (product) {
      const productSpec = product.productSpecs.find(
        (spec) => spec.id === newItem.productSpecId
      );
      if (productSpec) {
        const updatedItem = {
          specId: productSpec.id,
          productName: product.productName,
          productImg: product.productImg[0],
          productOriPrice: product.productOriPrice,
          productPrice: product.productPrice,
          specName: productSpec.specName,
          stock: productSpec.stock,
          selectedQuantity: newItem.selectedQuantity,
        };

        addToCart(updatedItem);
      }
    }
  };

  return (
    <button className="btn add__cart__btn" onClick={handleAddToCart}>
      <span className="icon">
        <HiShoppingCart />
      </span>
      <span>加入購物車</span>
    </button>
  );
};
export default React.memo(ProductPurchase);
