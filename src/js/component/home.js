import React from "react";
import Carousel from "./carousel.js";
import Footer from "./footer.js";
import Nav from "./nav-bar.js";

class Home extends React.Component {
	componentDidMount() {
		document.title = "Crystal Vibes";
	}

	render() {
		return (
			<div>
				<Nav />
				<Carousel />
				<Footer />
			</div>
		);
	}
}

export default Home;
