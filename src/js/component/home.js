import React from "react";
import CarouselReact from "./carousel-react";
import Nav from "./nav-bar.js";
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
				<CarouselReact />
				<div className="row">
					<CardMap />
				</div>
				<About />
				<Footer />
			</div>
		);
	}
}

export default Home;
