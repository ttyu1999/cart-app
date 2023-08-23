import React, { useState, useCallback } from "react";
import { HiUserCircle } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import BannerCarousel from "./BannerCarousel";
import styles from "./Home.module.scss";
import PRODUCT_DATA from "../assets/product-data";
import ProductItem from "../Component/Layout/Product/ProductItem";
import ProductModal from "../Component/Layout/Product/ProductModal";

const Home = () => {
  const [shownProductModal, setShownProductModal] = useState(false);
  const [getProduct, setGetProduct] = useState('');

  const selectedItemHandler = (product) => {
      setGetProduct(product);
  }

  const hideModalHandler = useCallback(() => {
      setShownProductModal(false);
  }, []);


  return (
    <div className={styles.home}>
      <section className="banner">
        <BannerCarousel />
      </section>
      <section className="login__box">
        <span className="icon">
          <HiUserCircle />
        </span>
        <h2>您好 請先登入</h2>
        <button className="btn signup" type="button">註冊會員</button>
        <button className="btn login" type="button">登入</button>
      </section>
      <section className="products">
        <ul className="products__box">
          {PRODUCT_DATA.map((product) => {
            return (
              <ProductItem
                key={product.id}
                product={product}
                productId={product.id}
                onSelected={selectedItemHandler}
                onShownModal={setShownProductModal}
              />
            );
          })}
        </ul>
        {shownProductModal && <ProductModal product={getProduct} onHide={hideModalHandler} />}
      </section>
    </div>
  );
};

export default Home;
