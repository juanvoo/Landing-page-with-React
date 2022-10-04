import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<div className="container">
		<Jumbotron/>
		<Card/>
		</div>
		<Footer/>
		</>
	);
};

export default Home;
