//shopping-cart-context
const  CartContext = createContext(
{
items:[],
addToItemCart: ()=>{}
}
) //초기설정

//App
//State 랑 이벤트함수 가져와서 변수에 넣기
const ctxValue = {
items: shoppingCart.items,
addToItemCart: handleAddItemCart
}


<CartContext.Provider value={ ctxValue}> //State 연결
  <Header/>
  <Shop/>
</CartContext.Provider >


//Cart
  const {items,addToItemCart} = useContext(CartContext); //원래 받던 props items 를 CartContext items 로 모두 변경
