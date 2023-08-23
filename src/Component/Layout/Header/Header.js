import styles from "./Header.module.scss";
import { HiOutlineMenu } from "react-icons/hi";
import { useState, useContext } from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";
import HeaderLogo from "./HeaderLogo";
import HeaderLoginButton from "./HeaderLoginButton";
import HeaderCartButton from "./HeaderCartButton";
import Cart from "./Cart";
import { CartContext } from "../../../store/cart-context";

const Header = () => {
  const [shownMenu, setShownMenu] = useState(false);
  const [shownCart, setShownCart] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const modalHandler = (identifier) => {
    identifier === "showMenu" ? setShownMenu(true) : setShownMenu(false);
    identifier === "showCart" ? setShownCart(true) : setShownCart(false);
  };

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.selectedQuantity;
  }, 0);

  return (
    <header className={styles.header} id="header">
      <div className="group">
        <HeaderLogo />
        <button type="button" title="Menu Button" className="menu" onClick={() => modalHandler("showMenu")}>
          <span className="icon">
            <HiOutlineMenu />
          </span>
        </button>
        {shownMenu && <HeaderMenu onHide={() => modalHandler("hide")} />}
        <HeaderSearch />

        <HeaderCartButton
          onShown={() => modalHandler("showCart")}
          onNumber={numberOfCartItems}
          items={items}
        />
        <HeaderLoginButton />
        {shownCart && (
          <Cart
            onHide={() => modalHandler("hide")}
            onNumber={numberOfCartItems}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
