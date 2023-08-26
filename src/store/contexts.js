import React from "react";

// Modal視窗
export const ModalContext = React.createContext({
  removeAnimation: false,
  setRemoveAnimation: () => {},
});

// 加入購物車相關操作
export const CartContext = React.createContext({
  productId: "",
  setProductId: () => {},
  productSpecId: "",
  setProductSpecId: () => {},
  quantity: 1,
  setQuantity: () => {},
  totalAmount: 0,
  addToCart: (item) => {},
  removeToCart: (id) => {},
});

// 選擇商品規格，獲得其庫存及選擇規格後重置數量
export const SelectedProductContext = React.createContext({
  getSpecStock: 0,
  setGetSpecStock: () => {},
  isResetQuantity: false,
  setIsResetQuantity: () => {},
  modelSrcoll: false,
  setModelSrcoll: () => {},
});

// 篩選商品
export const ProductListFilter = React.createContext({
  filterData: "",
  setFilterData: () => {},
});

// 搜尋商品
export const SearchContext = React.createContext({
  searchParams: "",
  setSearchParams: () => {},
});

// 商品分頁設定
export const PageContext = React.createContext({
  currentPage: "",
  setCurrentPage: () => {},
  getProductLength: "",
  setGetProductLength: () => {},
  onePageItem: "",
});

// 取得經搜尋、篩選後的商品總數量
export const GetProductLengthContext = React.createContext({
  setGetProductLength: () => {},
});
