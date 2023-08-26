import React, { useCallback, useContext } from 'react';
import { useRef, useEffect } from 'react';
import { HiOutlineChevronDown } from "react-icons/hi";
import styles from './FormSelect.module.scss';
import { SelectedProductContext } from '../../store/contexts';


const FormSelect = (props) => {
    const { filterList, setFilterList } = props;

    const selectedProductCtx = useContext(SelectedProductContext);
    const { setIsResetQuantity } = selectedProductCtx;
    const filterListRef = useRef();

    const showListHandler = useCallback(() => {
        setFilterList(!filterList);
        setIsResetQuantity(false);
    }, [filterList, setFilterList, setIsResetQuantity])

    const hideListHandler = useCallback((e) => {
        // 檢查點擊事件是否來自下拉列表之外的區域
        if (!filterListRef.current.contains(e.target)) {
            setFilterList(false);
            setIsResetQuantity(false);
    }
    }, [setFilterList, setIsResetQuantity]);

    useEffect(() => {
        document.addEventListener('click', hideListHandler);

        return () => {
            document.removeEventListener('click', hideListHandler);
        };
    });

    const toggleList = `filter__list ${!filterList ? "hidden" : ''}`;

    const toggleArrow = `icon ${filterList ? "rotate" : ''}`;

    return (
        <div className={`${styles.select} ${props.maxWidth ? styles.width : ''}`}>
            <div className="select__filter" onClick={showListHandler} ref={filterListRef}>
                <button type="button" className="filter__btn">{props.selectDefault}</button>
                <span className={toggleArrow}><HiOutlineChevronDown /></span>
            </div>
            <ul className={toggleList}>
                {props.children}
            </ul>
        </div>
    );
}

export default React.memo(FormSelect);