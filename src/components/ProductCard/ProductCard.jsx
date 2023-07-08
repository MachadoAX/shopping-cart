import { useContext } from 'react';
import formatCurrency from '../../utils/FormatCurrency';
import './ProductCard.css'
import { BsFillCartPlusFill } from "react-icons/bs";
import AppContext from '../../Context/AppContext';


const ProductCard = ({ data }) => {
   const { title , thumbnail, price } = data 

   const { cartItems, setCartItems } = useContext(AppContext)

   const handleAddCart = () => {
      setCartItems([...cartItems, data]) // "..." spread operator (copia os dados do objeto)
   }

  return (
    <section className='product-card'>
        <img 
            src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} 
            alt="product" 
            className='card-image'
            />

        <div className="card_infos">
            <h2 className='card_price'>{formatCurrency(price, 'BRL')}</h2>
            <h2 className='card_title'>{title}</h2>
        </div>

        <button 
          type='button' 
          className='button_add-cart'
          onClick={ handleAddCart}
          >
          <BsFillCartPlusFill/>
        </button>
    </section>
  )
}

export default ProductCard