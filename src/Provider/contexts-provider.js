import React, { useReducer, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ModalContext,
  SelectedProductContext,
  ProductListFilter,
  SearchContext,
  PageContext,
  GetProductLengthContext,
  CartContext,
} from "../store/contexts";
import { cartReducer, initialCartState } from "./cart-provider";

const ModalProvide = ({ children }) => {
  const [removeAnimation, setRemoveAnimation] = useState(false);

  return (
    <ModalContext.Provider value={{ removeAnimation, setRemoveAnimation }}>
      {children}
    </ModalContext.Provider>
  );
};

const SelectedProductProvide = ({ children }) => {
  const [getSpecStock, setGetSpecStock] = useState(0);
  const [isResetQuantity, setIsResetQuantity] = useState(false);
  const [modelSrcoll, setModelSrcoll] = useState(false);

  return (
    <SelectedProductContext.Provider
      value={{
        getSpecStock,
        setGetSpecStock,
        isResetQuantity,
        setIsResetQuantity,
        modelSrcoll,
        setModelSrcoll,
      }}
    >
      {children}
    </SelectedProductContext.Provider>
  );
};

const ProductListFilterProvide = ({ children }) => {
  const [filterData, setFilterData] = useState([]);

  return (
    <ProductListFilter.Provider
      value={{
        filterData,
        setFilterData,
      }}
    >
      {children}
    </ProductListFilter.Provider>
  );
};

const SearchProvide = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <SearchContext.Provider
      value={{
        searchParams,
        setSearchParams,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

const PageProvide = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [getProductLength, setGetProductLength] = useState("");

  return (
    <PageContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        getProductLength,
        onePageItem: 16,
      }}
    >
      <GetProductLengthContext.Provider value={setGetProductLength}>
        {children}
      </GetProductLengthContext.Provider>
    </PageContext.Provider>
  );
};

const CartProvide = ({ children }) => {
  const [productId, setProductId] = useState("");
  const [productSpecId, setProductSpecId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const addToCartHandler = (newItem) => {
    dispatchCartAction({ type: "ADD", item: newItem });
  };

  const removeToCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  return (
    <CartContext.Provider
      value={{
        productId,
        setProductId,
        productSpecId,
        setProductSpecId,
        quantity,
        setQuantity,
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addToCart: addToCartHandler,
        removeToCart: removeToCartHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const ContextsProvider = ({ children }) => {
  return (
    <ModalProvide>
      <SearchProvide>
        <PageProvide>
          <CartProvide>
            <SelectedProductProvide>
              <ProductListFilterProvide>{children}</ProductListFilterProvide>
            </SelectedProductProvide>
          </CartProvide>
        </PageProvide>
      </SearchProvide>
    </ModalProvide>
  );
};
