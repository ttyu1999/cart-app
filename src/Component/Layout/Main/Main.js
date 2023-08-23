import {  useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import BreadCrumb from "./BreadCrumb";
import FilterProduct from "./FilterProduct";
import ProductList from "../../../Component/Layout/Product/ProductList";
import Pagination from "./Pagination";
import "./Main.css";
import {
  PageProvide,
  ProductListFilterProvide,
} from "../../../store/product-context";
import MENU_DATA from "../../../assets/menu-data";
import useBreadCrumb from "../../../hook/useBreadCrumb";

const Main = () => {
  const { getListBreadCrumb } = useBreadCrumb();
  const location = useLocation();
  const path = location.pathname;

  const pathArray = path.split("/");
  pathArray.splice(0, 2);
  const pathStr = pathArray.join();

  const breadcrumbItems = getListBreadCrumb(pathStr, MENU_DATA);

  return (
    <main>
      <PageProvide>
        <Sidebar />
        <section className="product__content" id="product__content">
          <BreadCrumb breadCrumbs={breadcrumbItems} />
          <ProductListFilterProvide>
            <FilterProduct />
            <Routes>
              <Route path="/*" element={<ProductList />} />
              <Route path="/:categoryId/*" element={<ProductList />} />
            </Routes>
            <Pagination />
          </ProductListFilterProvide>
        </section>
      </PageProvide>
    </main>
  );
};

export default Main;
