export const initialCartState = {
  items: [],
  totalAmount: 0,
};

export const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems = [...state.items];

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.specId === action.item.specId
    );

    if (existingCartItemIndex !== -1) {
      const updatedItem = { ...state.items[existingCartItemIndex] };

      const totalQuantity =
        updatedItem.selectedQuantity + action.item.selectedQuantity;

      if (totalQuantity >= updatedItem.stock) {
        updatedItem.selectedQuantity = updatedItem.stock;
      } else {
        updatedItem.selectedQuantity = totalQuantity;
      }

      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount = updatedItems.reduce((total, item) => {
      return total + item.productPrice * item.selectedQuantity;
    }, 0);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const updatedItems = [...state.items];

    let updatedTotalAmount = state.totalAmount;

    updatedItems.map((item, index) => {
      if (item.specId === action.id) {
        if (item.selectedQuantity > 1) {
          item.selectedQuantity -= 1;
        } else {
          updatedItems.splice(index, 1);
        }
        return (updatedTotalAmount -= item.productPrice);
      }

      if (item.specId === action.id.specId) {
        if (action.id.selectedQuantity === 0) {
          updatedItems.splice(index, 1);
        }
        return (updatedTotalAmount -=
          item.productPrice * item.selectedQuantity);
      }

      return updatedTotalAmount;
    });

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return initialCartState;
};
