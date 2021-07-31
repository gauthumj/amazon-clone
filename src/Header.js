import React from 'react'
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search'
import { ShoppingBasketOutlined } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import './Header.css'

function Header() {
    const [{basket}] = useStateValue();

    return (
        <nav className="header">
            {/* logo */}
            <Link to='/'>
                <img className='header__logo'
                src = 'https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png'
                alt = "" 
                
                />
            </Link>
            {/* search box */}
            <div className = 'header__search'>
                <input type='text' className='header__searchInput' />
                <SearchIcon className = 'header__searchIcon' />
            </div>
            
            {/* links */}

            <div className = 'header__nav'>
                <Link to = '/login' className = "header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello J</span>    
                        <span className="header__optionLineTwo">sign in</span>    
                    </div>

                </Link>
                <Link to = '/' className = "header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>    
                        <span className="header__optionLineTwo">& Orders</span>    
                    </div>

                </Link>
                <Link to = '/' className = "header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>    
                        <span className="header__optionLineTwo">Prime</span>    
                    </div>

                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket"></div>
                        {/* Shopping Basket Icon */}
                        <ShoppingBasketOutlined />
                        {/* Number of items in the basket */}
                        <span className="header__basketCount">{basket?.length}</span>
                </Link>
            </div>

        </nav>
    )
}

export default Header
