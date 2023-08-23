import React, { useState } from "react";


export const ModalContext = React.createContext({
    removeAnimation: false,
    setRemoveAnimation: () => {},
});

export const ModalProvide = (props) => {
  const [removeAnimation, setRemoveAnimation] = useState(false);

    return (
        <ModalContext.Provider value={{ removeAnimation, setRemoveAnimation }}>
            {props.children}
        </ModalContext.Provider>
    );
}