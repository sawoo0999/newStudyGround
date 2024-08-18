import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import CartContext from "../store/CartContext";

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  const formatterPrice = currencyFormatter.format(meal.price);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
    console.log(cartCtx.items);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{formatterPrice}</p>
          <p className="meal-item-description ">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <button className="button" onClick={handleAddMealToCart}>
            Add to cart
          </button>
        </p>
      </article>
    </li>
  );
}
