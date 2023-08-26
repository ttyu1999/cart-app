import styles from './Fluctuation.module.scss';
import { HiOutlineMinusSm } from "react-icons/hi";
import { HiOutlinePlusSm } from "react-icons/hi";

const Fluctuation = (props) => {
    return (
        <div className={`${styles.quantity__box} ${props.className ? props.className : ''}`}>
            <button
                type="button"
                className="control__quantity decrease"
                onClick={props.onDecrease}
            >
                <span className="icon"><HiOutlineMinusSm /></span>
            </button>
            <input
                className="user__buy__quantity"
                type="number"
                onChange={props.onGetUserInputValue}
                value={props.onInputValue}
                readOnly={props.readOnly}
            />
            <button
                type="button"
                className="control__quantity increase"
                onClick={props.onIncrease}
            >
                <span className="icon"><HiOutlinePlusSm /></span>
            </button>
        </div>
    );
}

export default Fluctuation;