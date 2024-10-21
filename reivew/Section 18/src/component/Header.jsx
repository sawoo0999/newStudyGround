import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const processCtx = useContext(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce(
    (acc, cur) => acc + cur.quantity,
    0
  );

  function handleShowCart() {
    processCtx.showCart();
  }

  return (
    <div id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>

      <nav>
        <button className="text-button" onClick={handleShowCart}>
          Cart({totalCartItems})
        </button>
      </nav>
    </div>
  );
}
