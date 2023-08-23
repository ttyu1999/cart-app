import { useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import styles from "./HeaderSearch.module.scss";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { SearchContext, PageContext } from "../../../store/product-context";
import useScrollTop from "../../../hook/useScrollTop";

const HeaderSearch = () => {
  const [removeAnimation, setRemoveAnimation] = useState(false);
  const [inputBoxHide, setInputBoxHide] = useState(true);

  const { scrollToTop } = useScrollTop();

  const navigate = useNavigate();

  const searchCtx = useContext(SearchContext);
  const pageCtx = useContext(PageContext);

  const containerRef = useRef();
  const inputRef = useRef();

  const searchBoxHandler = () => {
    setInputBoxHide(false);
  };

  const submitHandler = () => {
    let inputValue = inputRef.current.value;
    pageCtx.setCurrentPage(1);

    searchCtx.setSearchParams({
      product: inputValue,
    });

    scrollToTop();

    return navigate(`/cart-app/product?product=${inputValue}`);
  };

  const inputKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitHandler();
    }
  };

  const hideSearchBoxHandler = useCallback(
    (e) => {
      // 檢查點擊事件是否來自下拉列表之外的區域
      if (!containerRef.current.contains(e.target)) {
        setRemoveAnimation(true);

        const timer = setTimeout(() => {
          setInputBoxHide(true);
          setRemoveAnimation(false);
        }, 350);

        return () => {
          clearTimeout(timer);
        };
      }
    },
    [setInputBoxHide]
  );

  useEffect(() => {
    document.addEventListener("click", hideSearchBoxHandler);

    return () => {
      document.removeEventListener("click", hideSearchBoxHandler);
    };
  }, [hideSearchBoxHandler]);

  const searchBox = !inputBoxHide && (
    <div className={`search__box ${removeAnimation ? "remove__box " : ""}`}>
      <input
        type="text"
        onKeyDown={inputKeyDownHandler}
        id="search__products"
        placeholder="搜尋..."
        ref={inputRef}
      />
      <span
        onClick={submitHandler}
        className={`icon ${removeAnimation ? "remove__icon" : ""}`}
      >
        <HiOutlineSearch />
      </span>
    </div>
  );

  return (
    <>
      <button
        type="button"
        title="Search Button"
        className={styles.search}
        onClick={searchBoxHandler}
        ref={containerRef}
      >
        <form>
          {searchBox}
          <label
            htmlFor="search__products"
            className={!inputBoxHide ? "hidden" : ""}
          >
            <span className="icon">
              <HiOutlineSearch />
            </span>
          </label>
        </form>
      </button>
      <div className={`${styles.overlay} ${inputBoxHide ? styles.hidden : ''}`}></div>
    </>
  );
};

export default HeaderSearch;
