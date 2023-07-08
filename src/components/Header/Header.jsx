import CartButton from '../CartButton/CartButton'
import SearchBar from '../SearchBar/SearchBar'

import './Header.css'

const Header = () => {
  return (
    <header className="header">
        <div className='container'>           
            <SearchBar/>
            <div>
                <CartButton/>
            </div>
        </div>
    </header>
  )
}

export default Header