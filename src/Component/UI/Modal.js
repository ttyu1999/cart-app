import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const body = document.body;

const Backdeop = (props) => {
    const {onHide, remove} = props;
    const showClass = `${styles.backdrop} ${remove ? styles.remove__backdrop : ''}`;

    return <div className={showClass} onClick={onHide} />;
}

const ModalOverlay = (props) => {
    const {remove, onMoveIn, onMoveOut, onRightSide} = props;

    const showClass = `${styles.modal} ${onRightSide ? styles.margin__left : ''} ${onMoveIn} ${remove ? onMoveOut : ''}`;

    return (
        <div className={showClass}>
            {props.children}
        </div>
    );
}
const portalElement = document.getElementById('overlay');

const Modal = (props) => {
    const {onHide, remove, onMoveIn, onMoveOut, onRightSide} = props;
    body.classList.add('commodity-mode');

    return (
        <>
            {ReactDOM.createPortal(<Backdeop onHide={onHide} remove={remove} />, portalElement)}
            {ReactDOM.createPortal(
            <ModalOverlay remove={remove} onMoveIn={onMoveIn} onMoveOut={onMoveOut} onRightSide={onRightSide}>
                {props.children}
            </ModalOverlay>, portalElement)}
        </>
    );
}

export default Modal;