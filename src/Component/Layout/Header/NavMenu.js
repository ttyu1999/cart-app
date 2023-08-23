import { Link, NavLink } from "react-router-dom";
import { useCallback } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import MENU_DATA from "../../../assets/menu-data";
import useFindMenuItem from "../../../hook/useFindMenuItem";

const NavMenu = (props) => {
  const { onHide } = props;
  const { categoriesClick } = useFindMenuItem();

  const renderListItem = useCallback(
    (menu) => {
      return (
        <li key={menu.id}>
          {menu.id === "000000" ? (
            <Link
              to={`../product`}
              onClick={() => categoriesClick(menu.id, onHide)}
            >
              {menu.name}
            </Link>
          ) : (
            <NavLink
              to={`/cart-app/product/${menu.id}`}
              onClick={() => categoriesClick(menu.id, onHide)}
            >
              {menu.name}
            </NavLink>
          )}
          {menu.subMenus && (
            <>
              <input type="checkbox" id={menu.id} />
              <label htmlFor={menu.id}>
                <span className="icon">
                  <HiOutlineChevronRight />
                </span>
              </label>
            </>
          )}
          {menu.subMenus && (
            <div className="drop__down" key={menu.id}>
              <header className="menu__header">
                <input type="checkbox" id={menu.id} />
                <label htmlFor={menu.id}>
                  <span className="icon back__prev">
                    <HiOutlineChevronLeft />
                  </span>
                </label>
                <h3>{menu.name}</h3>
                <span className="icon menu__close" onClick={onHide}>
                  <HiX />
                </span>
              </header>
              <ul>
                {menu.subMenus &&
                  menu.subMenus?.map((subMenu) => {
                    return renderListItem(subMenu);
                  })}
              </ul>
            </div>
          )}
        </li>
      );
    },
    [onHide, categoriesClick]
  );

  return (
    <ul>
      <li>
        <NavLink to="/" onClick={() => categoriesClick(null, onHide)}>
          首頁
        </NavLink>
      </li>
      {MENU_DATA.map((menu) => renderListItem(menu, menu.subMenus))}
    </ul>
  );
};
export default NavMenu;
