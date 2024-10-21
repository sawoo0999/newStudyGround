import { useContext, useState } from "react";
import { currencyFormatter } from "../util/formatting.js";
import CartContext from "../store/CartContext.jsx";

export default function MealItem({ meal }) {
  const carCtx = useContext(CartContext);

  function handleAddMealToCart() {
    carCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
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
