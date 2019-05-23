import React from "react";
import CarouselReact from "./carousel-react";
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
				<CarouselReact />
				<Footer />
			</div>
		);
	}
}

export default Home;
