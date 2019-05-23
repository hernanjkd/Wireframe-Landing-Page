import React from "react";
import ShopCrystals from "../../img/shopcrystals.jpg";

class CardShop extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="card justify-content-left mx-5">
					<img
						className="card-img-top"
						src={ShopCrystals}
						alt="..."
					/>
					<div className="card-body">
						<p className="card-text">
							Choose from our collection of Crystals and
							Accessories to fit you vibe
						</p>
					</div>
				</div>
			</div>
            <div className="row">
				<div className="card justify-content-center">
					<img
						className="card-img-top"
						src={ShopCrystals}
						alt="..."
					/>
					<div className="card-body">
						<p className="card-text">
							Learn more about Crystals through our blog
						</p>
					</div>
				</div>
			</div>
		);
	}
}
export default CardShop;
