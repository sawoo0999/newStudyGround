import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

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

  return (
    <Modal className="cart" open={processCtx.progress === "cart"}>
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
        <button className="button" onClick={processCtx.showCheckout}>
          Go to Check
        </button>
      </p>
    </Modal>
  );
}
