import { useContext } from 'react'

import AppContext from '../../Context/AppContext'
import CartItem from '../CartItem/CartItem'
import './Cart.css'
import formatCurrency from '../../utils/FormatCurrency'

const Cart = () => {
const { cartItems, isCartVisible } = useContext(AppContext)

const totalPrice = cartItems.reduce((acc, item)=> {
  return item.price + acc
},0)

  return (
    <section className={`cart ${ isCartVisible? 'cart-active' : ''}`}>
       <div className="cart-items">
          {cartItems.map((cartItem)=><CartItem key={cartItem.id} data={cartItem} />)}      

          
       </div>

       <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>

    </section>
  )
}

export default Cart