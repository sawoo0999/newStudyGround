import { createPortal } from "react-dom";
import Modal from "./UI/Modal";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";
import { currencyFormatter } from "../util/formatting";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const processCtx = useContext(UserProgressContext);
  const totalPrice = cartCtx.items.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );

  function handleOpenCheckout() {
    processCtx.showCheckout();
  }

  function handleCloseCart() {
    processCtx.hideCart();
  }

  return createPortal(
    <Modal
      className="cart"
      open={processCtx.process === "cart"}
      onClose={processCtx.process === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        {cartCtx.items.length > 0 && (
          <button className="text-button" onClick={handleOpenCheckout}>
            Go to Check
          </button>
        )}
      </p>
    </Modal>,
    document.getElementById("modal")
  );
}
