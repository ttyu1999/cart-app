import { HiOutlineShoppingCart } from "react-icons/hi";
import { useEffect, useState } from "react";

const HeaderCartButton = (props) => {
    const [ btnIsHightlighted, setBtnIsHightlighted ] = useState(false);

    const btnClasses = `shopping__cart ${btnIsHightlighted ? 'bump' : ''}`;

    useEffect(() => {
        if (props.items.length === 0) {
            return;
        }
        setBtnIsHightlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHightlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [props.items]);

    return (
        <button type="button" title="Cart Button" className={btnClasses} onClick={props.onShown}>
            <span className="icon">
                <div>
                    <HiOutlineShoppingCart />
                    <span className="item">{props.onNumber}</span>
                </div>
            </span>
        </button>
    );
}

export default HeaderCartButton;