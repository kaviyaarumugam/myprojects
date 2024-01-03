import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";



function Default() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
           
		  
		  
			<h3>FarmFresh</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">About Us</a>
				<a href="/#">Products</a>
				<a href="/#">Blogs</a>
				<a href="/#">Contact Us</a>
				<a href="/Login">Login</a>
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

export default Default;