import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import React, { useCallback, useEffect, useState, useMemo } from "react";

import { HiOutlineChevronDown } from "react-icons/hi";
import MENU_DATA from "../../../assets/menu-data";
import useFindMenuItem from "../../../hook/useFindMenuItem";
import useBreadCrumb from "../../../hook/useBreadCrumb";
import useGetPath from "../../../hook/useGetPath";

const Sidebar = () => {
  const [getActiveId, setGetActiveId] = useState([]);
  const [expandedState, setExpandedState] = useState({});
  const { pathStr } = useGetPath();
  const { categoriesClick } = useFindMenuItem();
  const { getListBreadCrumb } = useBreadCrumb();

  const arrowClickHandler = (id) => {
    setExpandedState((prevExpandedState) => {
      return {
        ...prevExpandedState,
        [id]: !prevExpandedState[id],
      };
    });
  };

  const activeLinkId = useCallback(() => {
    const activeItem = getListBreadCrumb(pathStr, MENU_DATA);
    const activeId = activeItem && activeItem.map((item) => item.id);
    setGetActiveId(activeId);
  }, [pathStr]);

  useEffect(() => {
    activeLinkId();
  }, [activeLinkId]);

  const renderListItem = (menu) => {
    const isSubMenuExpanded = expandedState[menu.id] || false;
    const isMenuActive =
      getActiveId && getActiveId.some((id) => id === menu.id);
    return (
      <li key={menu.id}>
        {menu.id === "000000" ? (
          <Link to={`../product`} onClick={() => categoriesClick(menu.id, null)}>
            <span>{menu.name}</span>
          </Link>
        ) : (
          <NavLink
            to={`../product/${menu.id}`}
            onClick={() => categoriesClick(menu.id, null)}
          >
            <span>{menu.name}</span>
          </NavLink>
        )}
        {menu.subMenus && (
          <>
            <span
              className={`icon${
                isMenuActive || isSubMenuExpanded ? " rotate" : ""
              }`}
              onClick={() => arrowClickHandler(menu.id)}
            >
              <HiOutlineChevronDown />
            </span>
          </>
        )}
        {menu.subMenus && (
          <div
            className={`drop__down sub__menu${
              isMenuActive || isSubMenuExpanded ? " checked" : " unchecked"
            }`}
          >
            <ul>
              {menu.subMenus.map((subMenu) => {
                return renderListItem(subMenu);
              })}
            </ul>
          </div>
        )}
      </li>
    );
  };

  return (
    <nav className={styles.sidebar}>
      <ul>
        {MENU_DATA.map((menu) => {
          return renderListItem(menu);
        })}
      </ul>
    </nav>
  );
};
export default Sidebar;
