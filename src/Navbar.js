import { useRef } from "react";
import {Link} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";



function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>Farm Fresh</h3>
			<nav ref={navRef}>
				<Link to='/'>Home</Link>
				<Link to='/about'>About us</Link>
				<Link to='/products'>Products</Link>
				<Link to='/blogs'>Blogs</Link>
				<Link to='/contact'>Contact</Link>
				<Link to='/login'>Login</Link> 
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaCartShopping />
				&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; <FaHeart />
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;