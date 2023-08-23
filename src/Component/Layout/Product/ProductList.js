import { useParams } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import styles from "./ProductList.module.scss";
import ProductModal from "./ProductModal";
import {
  ProductListFilter,
  SearchContext,
  PageContext,
  GetProductLengthContext,
} from "../../../store/product-context";
import PRODUCT_DATA from "../../../assets/product-data";
import useFindMenuItem from "../../../hook/useFindMenuItem";

const ProductList = () => {
  const [shownProductModal, setShownProductModal] = useState(false);
  const [getProduct, setGetProduct] = useState("");

  const { categoryId } = useParams();

  const filterCtx = useContext(ProductListFilter);
  const searchCtx = useContext(SearchContext);
  const pageCtx = useContext(PageContext);
  const getProductLengthCtx = useContext(GetProductLengthContext);

  const { filterData } = filterCtx;
  const { searchParams } = searchCtx;
  const { currentPage, onePageItem } = pageCtx;

  const { getParentCategoryIds } = useFindMenuItem();

  const search = searchParams.get("product");

  const selectCategoryHandler = useCallback(
    (products) => {
      return products.filter((product) => {
        if (
          search ||
          !categoryId ||
          categoryId === "product"
        ) {
          return true;
        } else {
          const parentIds = getParentCategoryIds(
            categoryId,
            product.productCategories
          );
          const allCategoryIds = product.productCategories.map(
            (category) => category.id
          );
          return (
            parentIds && parentIds.some((id) => allCategoryIds.includes(id))
          );
        }
      });
    },
    [categoryId, getParentCategoryIds, search]
  );

  const searchProductHandler = useCallback(
    (products) => {
      return products.filter((product) => {
        if (!search) {
          return true;
        } else {
          return product.productName.match(search) || product.productDesc.match(search);
        }
      });
    },
    [search]
  );

  const combinedFilterAndSearch = useCallback(
    (products) => {
      const filteredByCategory = selectCategoryHandler(products);
      const filteredAndSearched = searchProductHandler(filteredByCategory);
      return filteredAndSearched;
    },
    [selectCategoryHandler, searchProductHandler]
  );

  useEffect(() => {
    getProductLengthCtx(combinedFilterAndSearch(PRODUCT_DATA).length);
  }, [getProductLengthCtx, combinedFilterAndSearch]);

  // 比較函數用於排序
  const compareByTimeAndPrice = (a, b) => {
    switch (filterData) {
      case "new__to__old":
        return a.addedTime - b.addedTime; // 由新到舊
      case "old__to__new":
        return b.addedTime - a.addedTime; // 由舊到新
      case "high__to__low":
        return b.productPrice - a.productPrice; // 由高到低
      case "low__to__high":
        return a.productPrice - b.productPrice; // 由低到高

      default:
        return a.addedTime - b.addedTime;
    }
  };

  const filterProducts = combinedFilterAndSearch(PRODUCT_DATA).sort(
    compareByTimeAndPrice
  );

  const startIndex = (currentPage - 1) * onePageItem;
  const endIndex = onePageItem + startIndex;

  const currentItems = filterProducts.slice(startIndex, endIndex);

  let withoutItem;

  if (filterProducts.length === 0) {
    withoutItem = (
      <div className="without__item">
        <img src={require('../../../assets/img/withoutItem.png')} alt="without__item" />
        <p>
          <span>．</span>
          <span>．</span>
          <span>．</span>
          <span>暫</span>
          <span>無</span>
          <span>商</span>
          <span>品</span>
          <span>．</span>
          <span>．</span>
          <span>．</span>
        </p>
      </div>
    );
  }

  const selectedItemHandler = (product) => {
    setGetProduct(product);
  };

  const hideModalHandler = useCallback(() => {
    setShownProductModal(false);
  }, []);

  return (
    <div className={styles.products__container} id="products__container">
      {withoutItem}
      <ul className="products__box">
        {currentItems.map((product) => {
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
      {shownProductModal && (
        <ProductModal product={getProduct} onHide={hideModalHandler} />
      )}
    </div>
  );
};

export default ProductList;
