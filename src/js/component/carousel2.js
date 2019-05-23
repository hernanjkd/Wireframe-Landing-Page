import React from "react";
import Crystal from "../../img/crystals.jpg";

class Carousel extends React.Component {
	render() {
		let obj = { three: 3, one: 1, two: 2, four: 4 };

		let { one, two, three } = obj;

		console.log(one + "  " + two + "  " + three);

		return (
			<div>
				<img className="jumbo" src={Crystal} />
				<div className="jumboAlt">Crystals</div>
			</div>
		);
	}
}

export default Carousel;
