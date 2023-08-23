const useBreadCrumb = () => {
  const getListBreadCrumb = (itemId, categoryData) => {
    const recursiveFind = (menuItem, parents) => {
      if (menuItem.id === itemId) {
        return [...parents, menuItem];
      }

      if (menuItem.subMenus) {
        for (const subMenu of menuItem.subMenus) {
          const found = recursiveFind(subMenu, [...parents, menuItem]);
          if (found) {
            return found;
          }
        }
      }

      return null;
    };

    for (const menu of categoryData) {
      const result = recursiveFind(menu, []);
      if (result) {
        return result;
      }
    }

    return null;
  };

  const getProductBreadCrumb = (categoryItem, parents = []) => {
    if (categoryItem && categoryItem.id) {
        parents.push(categoryItem.id);

        if (categoryItem.subCategory) {
            getProductBreadCrumb(categoryItem.subCategory, parents);
        }
        return parents;
    }
    return null;
  }

  const findMenuByCategoryId = (categoryId, menuData) => {
    for (const menu of menuData) {
      if (menu.id === categoryId) {
        return menu;
      }
      if (menu.subMenus) {
        const foundSubMenu = findMenuByCategoryId(categoryId, menu.subMenus);
        if (foundSubMenu) {
          return foundSubMenu;
        }
      }
    }
    return null;
  };


  return { getListBreadCrumb, getProductBreadCrumb, findMenuByCategoryId };
};

export default useBreadCrumb;
