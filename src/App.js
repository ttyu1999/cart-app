import { Routes, Route } from "react-router-dom";
import Header from "./Component/Layout/Header/Header";
import Main from "./Component/Layout/Main/Main";
import Footer from "./Component/Layout/Footer/Footer";
import {
  SearchProvide,
  SelectedProductProvide,
} from "./store/product-context";
import { ModalProvide } from "./store/modal-context";
import { CartProvide } from "./store/cart-context";
import Home from "./pages/Home";
import ProductPage from "./Component/Layout/Product/ProductPage";
import ScrollToTop from "./Component/Layout/ScrollToTop";

const App = () => {
  return (
    <>
      <CartProvide>
        <SearchProvide>
          <ModalProvide>
            <SelectedProductProvide>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/*" element={<Main />} />
                <Route
                  path="/product/:categoryId/:productId"
                  element={<ProductPage />}
                />
              </Routes>
              <Footer />
              <ScrollToTop />
            </SelectedProductProvide>
          </ModalProvide>
        </SearchProvide>
      </CartProvide>
    </>
  );
};

export default App;
