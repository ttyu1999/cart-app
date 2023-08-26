import styles from "./Cart.module.scss";
import Modal from "../../UI/Modal";
import { HiX } from "react-icons/hi";
import { useContext } from "react";
import NumberWithCommas from "../../../Provider/NumberWithCommas";
import { ModalContext, CartContext } from "../../../store/contexts";
import useHideModel from "../../../hook/useHideModal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { hideMenuHandler } = useHideModel();
  const modalCtx = useContext(ModalContext);
  const cartCtx = useContext(CartContext);

  const { items, totalAmount } = cartCtx;

  let withoutItem;

  if (items.length === 0) {
    withoutItem = (
      <div className="without__item">
        <img src={require('../../../assets/img/withoutItem.png')} alt="without__item" />
        <p>無選購商品</p>
      </div>
    );
  }

  return (
    <Modal
      onHide={() => hideMenuHandler(350, props.onHide)}
      remove={modalCtx.removeAnimation}
      onMoveIn={styles.show__modal}
      onMoveOut={styles.remove__modal}
      onRightSide={true}
    >
      <section className={styles.mini__cart}>
        <header className="opt__items">
          <p>
            共<span>{props.onNumber}</span>件商品
          </p>
        </header>
        <div className="opt__products">
          {withoutItem}
          <ul>
            {items &&
              items.map((item) => {
                return (
                  <CartItem
                    key={item.specId}
                    item={item}
                  />
                );
              })}
          </ul>
        </div>
        <footer className="opt__total">
          <p>
            小計<span>NT${NumberWithCommas(totalAmount)}</span>
          </p>
        </footer>
        <button type="button" className="check__cart">
          前往訂購
        </button>
        <span
          className="icon cancel"
          onClick={() => hideMenuHandler(350, props.onHide)}
        >
          <HiX />
        </span>
      </section>
    </Modal>
  );
};

export default Cart;
