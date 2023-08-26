import { Link } from "react-router-dom";
import styles from "./BreadCrumb.module.scss";
import useScrollTop from "../../../hook/useScrollTop";

const BreadCrumb = (props) => {
  const { scrollToTop } = useScrollTop();

  return (
    <ol
      className={`${styles.breadcrumb} ${
        props.className ? props.className : ""
      }`}
    >
      <li key="home">
        <Link to="../">
          <button type="button">首頁</button>
        </Link>
      </li>
      <li key="product">
        <Link to="../product">
          <button type="button" onClick={scrollToTop}>
            全館商品
          </button>
        </Link>
      </li>
      {props.breadCrumbs &&
        props.breadCrumbs.map((breadcrumb) => {
          return (
            <li key={breadcrumb.id}>
              <Link to={`../product/${breadcrumb.id}`}>
                <button type="button" onClick={scrollToTop}>
                  {breadcrumb.name}
                </button>
              </Link>
            </li>
          );
        })}
    </ol>
  );
};
export default BreadCrumb;
