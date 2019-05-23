import React from "react";
import Carousel from "./carousel.js";
import Footer from "./footer.js";

class Home extends React.Component {
	componentDidMount() {
		document.title = "Crystal Vibes";
	}

	render() {
		return (
			<div>
				<Carousel />
				<Footer />
			</div>
		);
	}
}

export default Home;
