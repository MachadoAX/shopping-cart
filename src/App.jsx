import Provider from "./Context/Provider"
import Cart from "./components/Cart/Cart"
import Header from "./components/Header/Header"
import Products from "./components/Poducts/Products"

function App() {


  return (
    <Provider>
      <Header/>
      <Products/>
      <Cart/>
    </Provider>
  )
}

export default App
