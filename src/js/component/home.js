import React from "react";
import CarouselReact from "./carousel-react";
import Nav from "./nav-bar.js";
import Carousel from "./carousel2.js";
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
				<CarouselReact />
				<Carousel />
				<Card />
				<About />
				<Footer />
			</div>
		);
	}
}

export default Home;
