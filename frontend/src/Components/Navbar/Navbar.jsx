import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { ShopContext } from '../../Context/ShopContext';
import logo from '/logo.png'; // Adjust the path as necessary

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getTotalCartItems } = useContext(ShopContext);

  const [userInfo, setUserInfo] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    setUserInfo(user);
  }, [location]);

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    setUserInfo(null);
    setShowDropdown(false);
    navigate('/');
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/masks', label: 'Masks' },
    { path: '/decor', label: 'Decor' },
    { path: '/accessories', label: 'Accessories' },
  ];

  const getLinkClass = (path) =>
    `relative px-2 py-1 transition-all duration-300 
     after:content-[''] after:absolute after:left-0 after:bottom-0 
     after:h-[2px] after:w-full after:scale-x-0 after:bg-white 
     after:origin-left after:transition-transform after:duration-300 
     ${location.pathname === path ? 'after:scale-x-100' : ''}`;

  return (
    <nav className="flex justify-between items-center bg-orange-800 text-white p-2 relative">
      {/* Logo */}
      <Link to="/" className="flex items-center ml-20">
        <img src={logo} alt="Gymnasia Logo" className="w-14 h-14 p-1" />
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-6 uppercase">
        {navLinks.map(({ path, label }) => (
          <li key={path}>
            <Link to={path} className={getLinkClass(path)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Search Bar */}
      <div className="flex items-center ml-80">
        <input
          type="text"
          placeholder="Search products..."
          className="px-3 py-1 rounded-l-lg border-none outline-none text-black w-48"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
        <button
          className="bg-white text-orange-800 px-3 py-1 rounded-r-lg font-bold hover:bg-orange-200"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* User and Cart */}
      <div className="flex items-center space-x-6 mr-20 relative">
        {/* User Login / Dropdown */}
        {userInfo ? (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-2 focus:outline-none"
              aria-label="User menu"
            >
              <FaUser className="text-xl" />
              <span>Hello, {userInfo.name?.split(' ')[0]}</span>
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-md rounded-md z-10">
                <button
                  onClick={logoutHandler}
                  className="block w-full px-4 py-2 text-left hover:bg-orange-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="flex items-center space-x-2"
          >
            <FaUser className="text-xl" />
            <span>Login</span>
          </Link>
        )}

        {/* Cart */}
        <Link to="/cart" className="relative flex items-center space-x-2 ml-4">
          <FaShoppingCart className="text-xl" />
          <span>Cart</span>
          {getTotalCartItems() > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
              {getTotalCartItems()}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
