import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from './ProductQuantity.module.scss';
import Fluctuation from "../../UI/Fluctuation";
import { CartContext, SelectedProductContext } from "../../../store/contexts";


const ProductQuantity =(props) => {
    const { singleSpecStock, multipleSpecStock, setUserSeletedQuantity } = props;
    const [ inputValue, setInputValue ] = useState(1);
    const [ isStockShortage, setisStockShortage ] = useState(false);

    const selectedProductCtx = useContext(SelectedProductContext);
    const { isResetQuantity } = selectedProductCtx;

    const cartCtx = useContext(CartContext);
    const { setQuantity } = cartCtx;

    useEffect(() => {
        if (isResetQuantity) {
            setInputValue(1);
            setisStockShortage(false);
        }
    }, [isResetQuantity]);

    useEffect(() => {
        setUserSeletedQuantity(inputValue);
        setQuantity(inputValue);
    }, [setUserSeletedQuantity, setQuantity, inputValue]);

    const stockShortage = !isStockShortage || <p className={`${styles.stock__shortage} ${props.stockClassName ? props.stockClassName : ''}`}>庫存不足，無法訂購您選擇之數量</p>;

    const quantityHandler = useCallback((fluctuation) => {
        if (fluctuation === 'decrease') {
            if (inputValue > 1) {
                setInputValue(prevState => prevState - 1);
                setisStockShortage(false);
            }
        } else {
            if (inputValue < multipleSpecStock || inputValue < singleSpecStock) {
            setInputValue(prevState => prevState + 1);
            } else {
                setisStockShortage(true);
            }
        }
    }, [multipleSpecStock, singleSpecStock, inputValue]);

    const getUserInputValue = useCallback((e) => {
        const { value } = e.target;
        setInputValue(+value);

        if (value < 1) {
            setInputValue(1);
            setisStockShortage(false);
        }
        if (value > multipleSpecStock || value > singleSpecStock) {
            setInputValue(multipleSpecStock || singleSpecStock);
            setisStockShortage(true);
        }
        return setisStockShortage(false);
    }, [multipleSpecStock, singleSpecStock]);

    return (
        <>
            <Fluctuation
                onDecrease={() => quantityHandler('decrease')}
                onIncrease={() => quantityHandler('increase')}
                onGetUserInputValue={getUserInputValue}
                onInputValue={inputValue}
                className={props.className}
            />
            {stockShortage}
        </>
    );
}

export default ProductQuantity;