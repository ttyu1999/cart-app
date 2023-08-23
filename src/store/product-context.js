import { useSearchParams } from "react-router-dom";

import React, { useState } from "react";

export const SelectedProductContext = React.createContext({
  getSpecStock: 0,
  setGetSpecStock: () => {},
  isResetQuantity: false,
  setIsResetQuantity: () => {},
  modelSrcoll: false,
  setModelSrcoll: () => {},
});

export const SelectedProductProvide = ({ children }) => {
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

export const ProductListFilter = React.createContext({
  filterData: "",
  setFilterData: () => {},
});

export const ProductListFilterProvide = ({ children }) => {
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

export const SearchContext = React.createContext({
  searchParams: "",
  setSearchParams: () => {},
});

export const SearchProvide = ({ children }) => {
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

export const PageContext = React.createContext({
  currentPage: "",
  setCurrentPage: () => {},
  getProductLength: "",
  setGetProductLength: () => {},
  onePageItem: "",
});

export const GetProductLengthContext = React.createContext({
  setGetProductLength: () => {},
});

export const PageProvide = ({ children }) => {
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
