"use client";
import Image from "next/image";
import { useState } from "react";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let [count, setcount] = useState([0, 0, 0]);
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} width="100%" height="auto" />
            <h4>{상품[i]} $40</h4>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i]--;
                setcount(copy);
              }}
            >
              -
            </button>
            <span>{count[i]}</span>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i]++;
                setcount(copy);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
