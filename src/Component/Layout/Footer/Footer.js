import { Link } from "react-router-dom";
import { BsLine } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="group">
        <div className="logo__info">
          <Link to="">
            <h2>
              <img src="/img/logo.png" alt="INNISFREE" />
            </h2>
          </Link>
          <div className="brand__icon">
            <Link to="">
              <span className="icon">
                <BsLine />
              </span>
            </Link>
            <Link to="">
              <span className="icon">
                <BsFacebook />
              </span>
            </Link>
            <Link to="">
              <span className="icon">
                <BsYoutube />
              </span>
            </Link>
            <Link to="">
              <span className="icon">
                <BsTwitter />
              </span>
            </Link>
          </div>
        </div>
        <nav className="footer__menu">
          <ul>
            <li>
              <ul>
                <li>
                  <Link to="">
                    <h3>產品資訊</h3>
                  </Link>
                </li>
                <li>
                  <Link to="">熱銷推薦</Link>
                </li>
                <li>
                  <Link to="">新品上市</Link>
                </li>
                <li>
                  <Link to="">官網限定</Link>
                </li>
                <li>
                  <Link to="">現正優惠</Link>
                </li>
                <li>
                  <Link to="">產品系列</Link>
                </li>
                <li>
                  <Link to="">臉部保養</Link>
                </li>
                <li>
                  <Link to="">彩妝</Link>
                </li>
                <li>
                  <Link to="">身體髮品</Link>
                </li>
                <li>
                  <Link to="">香氛</Link>
                </li>
                <li>
                  <Link to="">美妝工具</Link>
                </li>
                <li>
                  <Link to="">男士保養</Link>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <Link to="">
                    <h3>優惠活動</h3>
                  </Link>
                </li>
                <li>
                  <Link to="">進行中的活動</Link>
                </li>
                <li>
                  <Link to="">活動結束</Link>
                </li>
                <li>
                  <Link to="">獲獎名單</Link>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <Link to="">
                    <h3>關於我們</h3>
                  </Link>
                </li>
                <li>
                  <Link to="">品牌故事</Link>
                </li>
                <li>
                  <Link to="">品牌歷程</Link>
                </li>
                <li>
                  <Link to="">原料故事</Link>
                </li>
                <li>
                  <Link to="">綠色森林運動</Link>
                </li>
                <li>
                  <Link to="">創新技術</Link>
                </li>
                <li>
                  <Link to="">空瓶回收</Link>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <Link to="">
                    <h3>會員專區</h3>
                  </Link>
                </li>
                <li>
                  <Link to="">購物指南</Link>
                </li>
                <li>
                  <Link to="">聯絡客服</Link>
                </li>
                <li>
                  <Link to="">門市資訊</Link>
                </li>
                <li>
                  <Link to="">公告</Link>
                </li>
                <li>
                  <Link to="">常見問題</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="copyright">
        <p>ⓒ 2023 作品集</p>
      </div>
    </footer>
  );
};

export default Footer;
