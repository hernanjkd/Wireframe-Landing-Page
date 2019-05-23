import React from "react";
import Nav from "./nav-bar.js";
import Carousel from "./carousel.js";
import CardShop from "./cardShop.js";
import CardInfo from "./cardInfo.js";
import About from "./about.js";

import Footer from "./footer.js";

class Home extends React.Component {
	componentDidMount() {
		document.title = "Crystal Vibes";
	}

	render() {
		return (
			<div>
				<Nav />
				<Carousel />
				<CardShop />
				<CardInfo />
				<About />
			</div>
		);
	}
}

export default Home;
