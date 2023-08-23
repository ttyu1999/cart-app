import { useLocation } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { BsLine } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";
import { HiFire } from "react-icons/hi";
import { HiOutlineChevronDown } from "react-icons/hi";
import ProductSelectSpec from "./ProductSelectSpec";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import styles from "./ProductPage.module.scss";
import BreadCrumb from "../Main/BreadCrumb";
import ProductQuantity from "./ProductQuantity";
import ProductPrice from "./ProductPrice";
import { SelectedProductContext } from "../../../store/product-context";
import ProductPurchase from "./ProductPurchase";
import { CartContext } from "../../../store/cart-context";

const ProductPage = () => {
  const { state } = useLocation();
  const [userSeletedQuantity, setUserSeletedQuantity] = useState(1);
  const [showQty, setShowQty] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const {
    id,
    productImg,
    productName,
    productDesc,
    productSpecs,
    productOriPrice,
    productPrice,
  } = state.product;

  const selectedProductCtx = useContext(SelectedProductContext);
  const { isResetQuantity, getSpecStock } = selectedProductCtx;

  const cartCtx = useContext(CartContext);
  const { setProductId, setProductSpecId } = cartCtx;

  useEffect(() => {
    setProductId(id);
    if (productSpecs.length === 1) {
      setProductSpecId(productSpecs[0].id);
    }
  }, [setProductId, setProductSpecId, id, productSpecs]);

  let swiperSlide = productImg?.map((img, index) => {
    return (
      <SwiperSlide key={index}>
        <img src={img} alt={productName} />
      </SwiperSlide>
    );
  });

  let hasProductSpec;

  if (productSpecs?.length > 1) {
    hasProductSpec = (
      <ProductSelectSpec productSpecs={productSpecs} setShowQty={setShowQty} />
    );
  }

  useEffect(() => {
    const body = document.body;
    body.classList.remove("commodity-mode");

    body.scrollIntoView({
      block: "start",
    });
  }, []);

  return (
    <main className={styles.main} id="main">
      <BreadCrumb className={styles.breadcrumb} breadCrumbs={state.category} />
      <section className="product__container">
        <div className="product__slider">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Thumbs, Autoplay]}
            className="mySwiper1"
          >
            {swiperSlide}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2"
          >
            {swiperSlide}
          </Swiper>
        </div>
        <div className="product__info">
          <div className="group">
            <div className="txt">
              <h2>{productName}</h2>
              <p>{productDesc}</p>
            </div>
            <div className="experience__box">
              <span className="icon">
                <HiFire />
              </span>
              <span className="icon">
                <HiFire />
              </span>
              <span className="icon">
                <HiFire />
              </span>
              <span className="icon">
                <HiFire />
              </span>
              <span className="icon">
                <HiFire />
              </span>
            </div>
            <div className="share__box">
              <span className="icon">
                <BsLine />
              </span>
              <span className="icon">
                <BsFacebook />
              </span>
              <span className="icon">
                <BsTwitter />
              </span>
            </div>
            {hasProductSpec}
            <ProductPrice
              className={styles.price__box}
              productOriPrice={productOriPrice}
              productPrice={productPrice}
              userSeletedQuantity={userSeletedQuantity}
            />
            {productSpecs?.length > 1 ? (
              showQty && (
                <ProductQuantity
                  multipleSpecStock={getSpecStock}
                  onResetQuantity={isResetQuantity}
                  stockClassName={styles.stock__shortage}
                  setUserSeletedQuantity={setUserSeletedQuantity}
                />
              )
            ) : (
              <ProductQuantity singleSpecStock={productSpecs[0].stock} />
            )}
            <p className="freight__txt">
              消費滿1000元可享免運優惠（宅配，超商取貨）| 離島地區滿2500元
            </p>
            <div className="purchase__box">
              <ProductPurchase />
              <button className="btn wish__list__btn">
                <span className="icon">
                  <HiOutlineHeart />
                </span>
              </button>
            </div>
          </div>
          <div className="detail">
            <ul className="accordion">
              <li>
                <input type="checkbox" id="instructions1" />
                <label htmlFor="instructions1">
                  <h3>產品說明</h3>
                  <span className="icon">
                    <HiOutlineChevronDown />
                  </span>
                </label>
                <div className="accordion__content">
                  <div className="edit">
                    1.猶如天生唇色般完美服貼
                    <br />
                    超輕盈空氣感質地，彷彿融化在雙唇般薄透舒適，絲毫沒有黏膩感。
                    <br />
                    <br />
                    2.不厚重的霧面妝感
                    <br />
                    全新配方與質地，一改過去大家對於霧面唇膏乾燥厚重的印象。
                    <br />
                    <br />
                    3.清爽保濕乾燥的雙唇
                    <br />
                    神經醯胺與四種植物保濕成分，上妝同時也能保濕乾燥的雙唇。
                  </div>
                </div>
              </li>
              <li>
                <input type="checkbox" id="instructions2" />
                <label htmlFor="instructions2">
                  <h3>使用方法</h3>
                  <span className="icon">
                    <HiOutlineChevronDown />
                  </span>
                </label>
                <div className="accordion__content">
                  <div className="edit">
                    將唇膏轉出適當長度，直接將產品塗抹於雙唇，或是利用唇刷描繪出更精緻的唇形。
                    <br />
                    <br />
                    也可以用手指沾取唇膏，打造自然的妝感。
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="product__detail">
        {/* tab1 start */}
        <input
          type="radio"
          id="tab1"
          name="tab__button"
          value="tab1"
          defaultChecked
        />
        <label htmlFor="tab1">
          <h3>產品詳情</h3>
        </label>
        <div className="tab__content">
          <div className="edit">
            <p style={{ textAlign: "center" }}>
              <img src="/img/彩妝/文宣圖.jpg" alt="文宣圖" />
            </p>
          </div>
        </div>
        {/* tab1 end */}
        {/* tab2 start */}
        <input type="radio" id="tab2" name="tab__button" value="tab2" />
        <label htmlFor="tab2">
          <h3>使用心得</h3>
        </label>
        <div className="tab__content">
          <div className="edit">
            記眼士亭、親法兔，讀衣林故旦支吉河員百打念木雪植節，胡且花大完但乙波三良合犬以以頁，科干小國合申內尤入聲神是以苗，星尾黃波上婆亭房雪原。科房飛肉千消叫雲平斥息抱冒：昌南國交：食刀娘。福牛珠夕三婆西跑，即道午入笑喝玉找錯結叫麻英耳候。到旁春女告成遠定拉勿息在，士男坡樹青次。色貫外好嗎遠肉多抄香蛋飽害太它口玉半明安？口良林歡和四點，裏放小魚入科夏辛歡中。就結亮的固明亭肖光皮早行九視書很坐虎孝安，亮飯着力以候外抓。月裝貝定京打入好天冬且不怪在門力因，位跟放雨貝衣金雨教給哭士字八以山送定是左。合亮目言她支秋山申忍急身他誰紅像意穿掃點。
          </div>
        </div>
        {/* tab2 end */}
        {/* tab3 start */}
        <input type="radio" id="tab3" name="tab__button" value="tab3" />
        <label htmlFor="tab3">
          <h3>訂單配送資訊</h3>
        </label>
        <div className="tab__content">
          <div className="edit">
            配送須知 完成結帳後1-3個工作天進行出貨，出貨後配送約須2-3個工作天。
            1. 配送方式 目前提供超商取貨與宅配（黑貓宅急便）兩種方式。 2.
            運費計算方式 配送方式 地點 訂單金額 運費 超商取貨
            本島各地各縣市、澎湖部分地區、金門部分地區大金門、小金門）、小琉球、馬祖全部地區、綠島。
            未滿1000元 80元 1000元以上 免運費 宅配到府 本島各地各縣市 未滿1000元
            100元 1000元以上 免運費
            澎湖部分地區、金門部分地區（大金門、小金門）、小琉球、馬祖全部地區、綠島。
            未滿2500元 250元 2500元以上 免運費 3. 指定配送時段
            如選擇宅配，可選擇以下時段：上午(8:00-12:00)/下午(12:00-17:00)/晚上(17:00-20:00)
            * 注意事項 - 部份區域無法指定配貨時段。 -
            受天候、交通狀況影響或假日訂單較多時可能會延遲出貨，敬請見諒。
            取消訂單
            訂單尚未顯示「配送中」前，可取消訂單；恕不接受部份取消。如欲取消訂單，請至[我的會員帳戶]→[我的訂單管理]點選「取消訂單」後，填寫取消申請資料即可。
            退貨須知 訂單尚未顯示「配送中」前，可取消訂單；
            訂單已完成配送的狀態下始能申請退貨；
            無提供換貨服務，如有特殊需求詳恰客服中心。 退貨條件
            退貨需於到貨7天內進行申請，且商品為未開封的狀態；僅接受整筆退貨。
            退貨辦法與流程
            [我的會員帳戶]→[我的訂單管理]→於訂單詳細資料頁面點選「申請退貨」
            輸入退貨事由後申請 客服審核是否符合退貨標準
            審核通過後，以簡訊與Email寄送超商退貨編號
            將商品與贈品包裝後至所選超商寄送 物流確認商品狀態後處理退款
            官網購買的商品僅能於官網進行退貨
            取貨後無法進行退貨申請，請聯繫客服中心0800-600-308(免費電話)
            退貨手續完成起3-5個工作天進行退款
            在您遞交退貨申請的同時，已表示同意每筆退貨授權營業人銷貨退回進貨退出貨或折讓證明單將全權由愛茉莉太平洋股份有限公司代為處理
            客服中心 0800-600-308(免費電話) 服務時間 09:00 – 18:00
            (國定假日及周末休息) 線上諮詢
          </div>
        </div>
        {/* tab3 end */}
      </section>
    </main>
  );
};

export default ProductPage;
