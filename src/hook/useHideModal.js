import { useCallback, useContext } from "react";
import { ModalContext } from "../store/modal-context";

const useHideModel = () => {
    const modalCtx = useContext(ModalContext);
    
    const hideMenuHandler = (seconds, onHide) => {
        modalCtx.setRemoveAnimation(true);
        const timer = setTimeout(() => {
            onHide();
            modalCtx.setRemoveAnimation(false);
            const body = document.body;
            body.classList.remove('commodity-mode');
        }, seconds);

        return () => {
        clearTimeout(timer);
        };

    }

    return { hideMenuHandler };
}

export default useHideModel;