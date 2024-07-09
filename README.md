//shopping-cart-context
const  CartContext = createContext({items:[]}) //초기설정

//App
<CartContext.Provider value={shoppingCart}>
  <Header/>
  <Shop/>
</CartContext.Provider >


//Cart
  const cartCtx = useContext(CartContext); //원래 받던 items 를 cartCtx.items 로 모두 변
