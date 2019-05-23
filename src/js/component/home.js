import React from "react";
import Nav from "./nav-bar.js";
import Carousel from "./carousel.js";
import Card from "./card.js";
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
				<Card />
				<About />
			</div>
		);
	}
}

export default Home;
