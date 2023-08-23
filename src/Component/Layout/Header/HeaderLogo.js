import { Link } from 'react-router-dom';

const HeaderLogo = (props) => {
    return (
        <div className="logo">
            <Link to="">
                <h1>
                    <img src={require('../../../assets/img/logo.png')} alt="INNISFREE" />
                </h1>
            </Link> 
        </div>
    );
}

export default HeaderLogo;