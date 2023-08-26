import { Routes, Route } from "react-router-dom";
import Header from "./Component/Layout/Header/Header";
import Home from "./pages/Home";
import Main from "./Component/Layout/Main/Main";
import ProductPage from "./Component/Layout/Product/ProductPage";
import Footer from "./Component/Layout/Footer/Footer";
import ScrollToTop from "./Component/Layout/ScrollToTop";
import { ContextsProvider } from "./Provider/contexts-provider";

const App = () => {
  return (
    <>
      <ContextsProvider>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="product/*" element={<Main />} />
          <Route
            path="product/:categoryId/:productId"
            element={<ProductPage />}
          />
        </Routes>
        <Footer />
        <ScrollToTop />
      </ContextsProvider>
    </>
  );
};

export default App;
