import React from "react";
import Crystal from "../../img/crystals.jpg";

class Carousel extends React.Component {
	render() {
		return (
			<div>
				<img className="jumbo" src={Crystal} />
				<div className="jumboAlt">Crystals</div>
			</div>
		);
	}
}

export default Carousel;
