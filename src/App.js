import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer"
import  {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from "./Home";
import About from './About';
import Products from './Products';
import Blogs from './Blogs';
import Contact from './Contact';
import Terms from './Terms';
import Privacy from './Privacy';
import Faqs from './Faqs';
import Login from './Login';


function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/about" element={<About/>}></Route>
				<Route path="/products" element={<Products/>}></Route>
				<Route path="/blogs" element={<Blogs/>}></Route>
				<Route path="/contact" element={<Contact/>}></Route>
				<Route path="/terms" element={<Terms/>}></Route>
				<Route path="/privacy" element={<Privacy/>}></Route>
				<Route path="/faqs" element={<Faqs/>}></Route>
				<Route path="/login" element={<Login/>}></Route>
			</Routes>
			<Footer/>
		  
		</React.Fragment>

		
	);
}

export default App;