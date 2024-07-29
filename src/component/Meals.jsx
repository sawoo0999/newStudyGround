import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    async function getMeals() {
      try {
        const res = await fetch("http://localhost:3000/meals");
        if (!res.ok) return;
        const data = await res.json();
        setMeals(data);
      } catch (err) {
        console.log(err);
      }
    }
    getMeals();
  }, []);
  return (
    <ul id="meals">
      {meals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}
