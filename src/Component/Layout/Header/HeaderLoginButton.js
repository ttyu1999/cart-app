import { HiUser } from "react-icons/hi2";

const HeaderLoginButton = () => {
    return (
        <button type="button" title="Login Button" className="login">
            <span className="icon">
                <HiUser />
            </span>
        </button>
    );
}

export default HeaderLoginButton;