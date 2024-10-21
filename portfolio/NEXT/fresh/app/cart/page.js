export default function Cart() {
  let item = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h4 className="title">Cart</h4>
      {item.map((a, i) => {
        return <Cartitem item={item[i]} />;
      })}
    </div>
  );
}

function Cartitem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
