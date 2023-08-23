import React from "react";
import NumberWithCommas from '../../../Component/Provider/NumberWithCommas';
import styles from './ProductPrice.module.scss';

const ProductPrice = (props) => {
    const { productOriPrice, productPrice, userSeletedQuantity } = props;

    let oriPrice = productOriPrice && <p className="ori__price">NT${NumberWithCommas(productOriPrice * userSeletedQuantity)}</p>;

    return (
        <div className={`${styles.price__box} ${props.className ? props.className : ''}`}>
            {oriPrice}
            <p className="price">NT${NumberWithCommas(productPrice * userSeletedQuantity)}</p>
        </div>
    );
}
export default React.memo(ProductPrice);