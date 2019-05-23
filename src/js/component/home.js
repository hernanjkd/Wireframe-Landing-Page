import React from "react";
import Nav from "./nav-bar.js";
import Carousel from "./carousel.js";
import About from "./about.js";
import CardMap from "./cardmap.js";

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
				<div className="row">
					<CardMap />
				</div>
				<About />
			</div>
		);
	}
}

export default Home;
