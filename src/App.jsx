import { CartContextProvider } from "./store/CartContext.jsx";
import Header from "./component/Header.jsx";
import Meals from "./component/Meals.jsx";
import Cart from "./component/Cart.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
