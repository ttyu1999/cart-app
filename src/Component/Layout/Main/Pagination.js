import React, { useMemo } from 'react';
import { useContext } from 'react';
import styles from './Pagination.module.scss';
import { PageContext } from '../../../store/product-context';

const Pagination = () => {
    const pageCtx = useContext(PageContext);

    const { getProductLength, onePageItem, currentPage, setCurrentPage } = pageCtx;

    const totalPages = Math.ceil(getProductLength / onePageItem);

    const handlePageChange = (page) => {
        setCurrentPage(page);

        const element = document.getElementById('product__content');

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    let hasPage;

    if (getProductLength > onePageItem) {
        hasPage = (
            <ul className={styles.pagination}>
                {
                    Array.from({ length: totalPages }, (_, index) => {
                        return (
                            <li key={index} className={currentPage === index + 1 ? 'currentpage' : ''} onClick={() => handlePageChange(index + 1)}>
                                <button type="button">
                                    <span>{index + 1}</span>
                                </button>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

    return hasPage;
}

export default React.memo(Pagination);