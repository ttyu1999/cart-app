import NavMenu from "./NavMenu";
import styles from "./HeaderMenu.module.scss";
import { HiX } from "react-icons/hi";
import Modal from "../../../Component/UI/Modal";
import { useContext } from "react";
import useHideModel from "../../../hook/useHideModal";
import { ModalContext } from "../../../store/contexts";

const HeaderMenu = (props) => {
  const modalCtx = useContext(ModalContext);

  const { hideMenuHandler } = useHideModel();

  return (
    <Modal
      onHide={() => hideMenuHandler(350, props.onHide)}
      remove={modalCtx.removeAnimation}
      onMoveIn={styles.show__modal}
      onMoveOut={styles.remove__modal}
    >
      <div className={styles.nav}>
        <section className="menu__group">
          <header className="menu__header">
            <h2>MENU</h2>
            <span className="icon menu__close" onClick={() => hideMenuHandler(350, props.onHide)}>
              <HiX />
            </span>
          </header>
          <nav className="menu">
            <NavMenu onHide={() => hideMenuHandler(350, props.onHide)} />
          </nav>
          <footer className="menu__footer">
            <ul>
              <li>
                <button type="button">關於我們</button>
              </li>
              <li>
                <button type="button">顧客服務</button>
              </li>
              <li>
                <button type="button">尋找旗艦店</button>
              </li>
              <li>
                <button type="button">聯繫</button>
              </li>
            </ul>
          </footer>
        </section>
      </div>
    </Modal>
  );
};

export default HeaderMenu;
