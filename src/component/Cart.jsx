import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";
import { createPortal } from "react-dom";

export default function Cart() {
  const carCtx = useContext(CartContext);
  const processCtx = useContext(UserProgressContext);
  const totalPrice = carCtx.items.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  function handleCloseCart() {
    processCtx.hideCart();
  }

  function handleOpenCart() {
    processCtx.showCheckout();
  }

  return createPortal(
    <Modal
      className="cart"
      open={processCtx.progress === "cart"}
      onClose={processCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {carCtx.items.map((cart) => (
          <CartItem
            key={cart.id}
            item={cart}
            onIncrease={() => carCtx.addItem(cart)}
            onDecrease={() => carCtx.removeItem(cart.id)}
          ></CartItem>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <button className="text-button" onClick={handleCloseCart}>
          Close
        </button>
        {carCtx.items.length > 0 && (
          <button className="button" onClick={handleOpenCart}>
            Go to Check
          </button>
        )}
      </p>
    </Modal>,
    document.getElementById("modal")
  );
}
