import { AiOutlineShoppingCart } from 'react-icons/ai'
import './CartButton.css'
import AppContext from '../../Context/AppContext'
import { useContext } from 'react'

const CartButton = () => {

  const { cartItems, isCartVisible , setIsCartVisible } = useContext(AppContext)
  return (
    <button 
      type='button' 
      className='cart_button' 
      onClick={()=>{setIsCartVisible(!isCartVisible)}}>
        <AiOutlineShoppingCart/>

        { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span> }
    </button>
  )
}

export default CartButton