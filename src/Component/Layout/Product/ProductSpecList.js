import React from 'react';
import { useContext } from 'react';
import styles from './ProductSpecList.module.scss';
import { CartContext, SelectedProductContext } from "../../../store/contexts";


const ProductSpecList = (props) => {
    const { productSpec, onSelected, setShowQty } = props;
    const selectedProductCtx = useContext(SelectedProductContext);
    const cartCtx = useContext(CartContext);

    const { setIsResetQuantity, setGetSpecStock } = selectedProductCtx;
    const { setProductSpecId } = cartCtx;
    
    const selectedHandler = () => {
        let stock = productSpec.stock;
        if (stock > 0) {
            onSelected(productSpec.specName);
            setGetSpecStock(stock);
            setShowQty(true);
            setIsResetQuantity(true);
            setProductSpecId(productSpec.id);
        }
    }

    const isSoldOut = !productSpec.stock ? styles.soldout : '';

    return (
        <li className={isSoldOut} onClick={selectedHandler}>
            {productSpec.specName}
            {!productSpec.stock && <span>暫無存貨</span>}
        </li>
    );
}

export default ProductSpecList;