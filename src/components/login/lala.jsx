// import React, { useState, useContext } from 'react'
// import "./style.scss";
// import { FaChevronDown, FaBell, FaShoppingBasket, FaHeart, FaArrowRight } from "react-icons/fa"
// import useFetchData from '../../hooks/useFetchData'
// import { Link, NavLink } from 'react-router-dom'
// import axios from 'axios';
// import Search from '../search/index'
// import { useEffect } from 'react';
// import { useSelector } from "react-redux"

// const index = () => {
//   const data = useFetchData("/categories");
//   const products = useFetchData("/products");

//   const [state, setState] = useState("")



//   const getUser = (e) => {
//     setState(e.target.value)
//   }

//   const mem = (e) => {
//     console.log(e.target.value);
//   }

//   const filtered = products.filter((item) =>
//     item.title.toLowerCase().includes(state.trim())
//   );

//   const createUserData = useSelector(state => state.email)
//   console.log(createUserData);
//   return (
//     <div className="containe">



//       <div className="header">
//         <div className="navbar">
//           <nav className='wrapper_navbar'>
//             <ul>
//               <li className='registerAndSiginUp'>Hi!
//                 <NavLink to="/login">
//                   Sigin in
//                 </NavLink>
//                 or
//                 <Link to="/register">register</Link>
//               </li>
//               <li>Daily Deals</li>
//               <li>Brand Outlet</li>
//               <li>Help & Cantact</li>
//             </ul>

//             <ul>
//               <li>Sell</li>
//               <li>Watchlist <FaChevronDown /></li>
//               <li>My eBay <FaChevronDown /></li>
//               <li><FaBell /></li>
//               <li><FaShoppingBasket /></li>
//             </ul>
//           </nav>
//         </div>
//         <hr />
//         <div className="header_search">
//           <NavLink to="/">
//             < img src="https://www.vectorlogo.zone/logos/ebay/ebay-ar21.png" alt="" />
//           </NavLink>
         
//           {
//             createUserData ? createUserData :  <div className="header_shop_category">Shop by <br /> category <span><FaChevronDown /></span></div>
//           }

//           <div className="header_input_wrapper">
//             <div className="header_input_search">
//               <Link to={`/search`}>
//                 <input value={state} onInput={(event) => getUser(event)} className='search_header' type="text" placeholder='Search for anything' />
//               </Link>
//               <select onClick={(e) => mem(e)} name="" id="" className='category_header'>
//                 <option defaultChecked>Category</option>
//                 {
//                   data.map(elem =>
//                     <option key={elem.id}>{elem.name}</option>
//                   )
//                 }
//               </select>

//             </div>
//           </div>
//           <button className='header_btn_search'>Search</button>
//           <span className='header_advanced'>Advanced</span>
//         </div>
//         <hr />

//         <div className="header_home_menu_page">
//           <ul>
//             <li>Home</li>
//             <li><span><FaHeart /></span> Saved</li>
//             <li>Motors</li>
//             <li>Electronics</li>
//             <li>Collectibles</li>
//             <li>Home & Garden</li>
//             <li>Fashion</li>
//             <li>Toys</li>
//             <li>Sporting Goods</li>
//             <li>Business & Industrial</li>
//             <li>Jewelry & Watches</li>
//             <li>Jewelry & Watches</li>
//             <li>Refurbished</li>
//           </ul>
//         </div>
//       </div>
//       <div className="shop_menu">
//         <div className="header_banner_wrapper">
//           <div className="header_wrap_banner_words">
//             <h1>Super savings at <br /> the Brand Outlet</h1>
//             <p>Up to 60% off the brands you love.</p>
//             <button>Shop now <FaArrowRight /></button>
//           </div>
//           <div className="header_wrap_banner_callaway">
//             <p>Callaway <FaArrowRight /></p>
//             <img src="https://cdn-icons-png.flaticon.com/512/49/49566.png" alt="" />
//           </div>
//           <div className="header_wrap_banner_callaway">
//             <p>Merrell <FaArrowRight /></p>
//             <img src="https://cdn-icons-png.flaticon.com/512/49/49566.png" alt="" />
//           </div>
//           <div className="header_wrap_banner_callaway">
//             <p>Specialized <FaArrowRight /></p>
//             <img src="https://cdn-icons-png.flaticon.com/512/49/49566.png" alt="" />
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default index;