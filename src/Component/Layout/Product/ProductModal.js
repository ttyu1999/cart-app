import { Link, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import ProductSelectSpec from "./ProductSelectSpec";
import ProductPrice from "./ProductPrice";
import ProductQuantity from "./ProductQuantity";
import ProductPurchase from "./ProductPurchase";
import useBreadCrumb from "../../../hook/useBreadCrumb";
import { SelectedProductContext } from "../../../store/product-context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./ProductModal.module.scss";
import Modal from "../../UI/Modal";
import { ModalContext } from "../../../store/modal-context";
import useHideModel from "../../../hook/useHideModal";
import { CartContext } from "../../../store/cart-context";
import MENU_DATA from "../../../assets/menu-data";

const ProductModal = (props) => {
  const [userSeletedQuantity, setUserSeletedQuantity] = useState(1);
  const [showQty, setShowQty] = useState(false);
  const { product, onHide } = props;

  const { categoryId } = useParams();

  const {
    id,
    mainCategory,
    productImg,
    productName,
    productDesc,
    productSpecs,
    productOriPrice,
    productPrice,
  } = product;

  const { getProductBreadCrumb, findMenuByCategoryId } = useBreadCrumb();

  const categories = getProductBreadCrumb(mainCategory);

  const category = categories.map((category) =>
    findMenuByCategoryId(category, MENU_DATA)
  );

  category.push({name: productName, id});

  const modalCtx = useContext(ModalContext);
  const cartCtx = useContext(CartContext);
  const selectedProductCtx = useContext(SelectedProductContext);

  const { modelSrcoll, isResetQuantity, getSpecStock } = selectedProductCtx;

  const { setProductId, setProductSpecId } = cartCtx;

  useEffect(() => {
    setProductId(id);
    if (productSpecs.length === 1) {
      setProductSpecId(productSpecs[0].id);
    }
  }, [setProductId, setProductSpecId, id, productSpecs]);

  const { hideMenuHandler } = useHideModel();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  let swiperSlide = productImg?.map((img, index) => {
    return (
      <SwiperSlide key={index}>
        <img src={img} alt={productName} />
      </SwiperSlide>
    );
  });

  let hasProductSpec;

  if (productSpecs?.length > 1) {
    hasProductSpec = (
      <ProductSelectSpec productSpecs={productSpecs} setShowQty={setShowQty} />
    );
  }

  const modalStyle = modelSrcoll
    ? { overflowY: "auto" }
    : { overflowY: "visible" };

  return (
    <Modal
      onHide={() => hideMenuHandler(250, onHide)}
      remove={modalCtx.removeAnimation}
      onMoveIn={styles.show__modal}
      onMoveOut={styles.remove__modal}
    >
      <section className={styles.product__modal}>
        <form className="container" onSubmit={submitHandler} style={modalStyle}>
          <div className="item">
            <div className="pic">
              <Swiper
                modules={[Autoplay]}
                loop
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
              >
                {swiperSlide}
              </Swiper>
            </div>
          </div>
          <div className="item">
            <div className="txt">
              <h2>{productName}</h2>
              <p>{productDesc}</p>
            </div>
            {hasProductSpec}
            <ProductPrice
              productOriPrice={productOriPrice}
              productPrice={productPrice}
              userSeletedQuantity={userSeletedQuantity}
            />
            {productSpecs?.length > 1 ? (
              showQty && (
                <ProductQuantity
                  multipleSpecStock={getSpecStock}
                  onResetQuantity={isResetQuantity}
                  setUserSeletedQuantity={setUserSeletedQuantity}
                />
              )
            ) : (
              <ProductQuantity singleSpecStock={productSpecs[0].stock} />
            )}
            <div className="purchase__buttons__box">
              <Link
                to={`/product/${categoryId}/${id}`}
                state={{ product, category }}
                className="btn read__more__btn"
              >
                <button type="button">
                  <span>查看詳情</span>
                </button>
              </Link>
              <ProductPurchase />
            </div>
            
          </div>
        </form>
        <span
          className="icon cancel"
          onClick={() => hideMenuHandler(250, onHide)}
        >
          <HiX />
        </span>
      </section>
    </Modal>
  );
};

export default ProductModal;
