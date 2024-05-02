import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useCart } from '../context/CartContext';

function Navbar() {
    const { cartItems } = useCart();
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Redirect to the category page based on the search query
        if (searchQuery.trim() !== '') {
            const categoryLink = `/${searchQuery.toLowerCase()}`;
            navigate(categoryLink); // Use navigate instead of history.push
        }
    };

    return (
        <div>
            <div className="navSection">
                <div className="title">
                    <h2>E-Commerce</h2>
                </div>
                <div className="search">
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder='Search products like mobiles,computers,watches,mensware,books,furniture,kitchen,fridge,speakers,ac,tv etc'
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
                    </form>
                </div>
                <div className="user">
                    <Link to='/login'>
                        <div className='user-detail btn btn-primary position-relative'>
                            Login
                        </div>
                    </Link>
                    <Link to='/cart'>
                        <div className='cart'>
                            <button type="button" className="btn btn-primary position-relative">
                                Cart
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartItems.length}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="submenu">
                <ul>
                    <li><Link to='/mobiles' className='link'>Mobiles</Link></li>
                    <li><Link to='/computers' className='link'>Computers</Link></li>
                    <li><Link to='/watches' className='link'>Watches</Link></li>
                    <li><Link to='/mensware' className='link'>Mens Wear</Link></li>
                    <li><Link to='/womenwear' className='link'>Woman Wear</Link></li>
                    <li><Link to='/books' className='link'>Books</Link></li>
                    <li><Link to='/furniture' className='link'>Furniture</Link></li>
                    <li><Link to='/kitchen' className='link'>Kitchen</Link></li>
                    <li><Link to='/fridge' className='link'>Fridge</Link></li>
                    <li><Link to='/speakers' className='link'>Speakers</Link></li>
                    <li><Link to='/ac' className='link'>AC</Link></li>
                    <li><Link to='/tv' className='link'>TV's</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
