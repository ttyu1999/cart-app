import { HiUpload } from "react-icons/hi";
import styles from './ScrollToTop.module.scss';
import useScrollTop from "../../hook/useScrollTop";

const ScrollToTop = () => {
    const { scrollToTop } = useScrollTop();

    return (
        <div className={styles.scroll__to__top} onClick={scrollToTop}>
            <span className="icon">
                <HiUpload />
            </span>
        </div>
    );
}

export default ScrollToTop;