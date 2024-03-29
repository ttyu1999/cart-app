import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import BreadCrumb from "./BreadCrumb";
import FilterProduct from "./FilterProduct";
import ProductList from "../../../Component/Layout/Product/ProductList";
import Pagination from "./Pagination";
import "./Main.css";
import MENU_DATA from "../../../assets/menu-data";
import useBreadCrumb from "../../../hook/useBreadCrumb";
import useGetPath from "../../../hook/useGetPath";

const Main = () => {
  const { getListBreadCrumb } = useBreadCrumb();
  const { pathStr } = useGetPath();

  const breadcrumbItems = getListBreadCrumb(pathStr, MENU_DATA);

  return (
    <main>
      <Sidebar />
      <section className="product__content" id="product__content">
        <BreadCrumb breadCrumbs={breadcrumbItems} />
        <FilterProduct />
        <Routes>
          <Route path="/*" element={<ProductList />} />
          <Route path="/:categoryId/*" element={<ProductList />} />
        </Routes>
        <Pagination />
      </section>
    </main>
  );
};

export default Main;
