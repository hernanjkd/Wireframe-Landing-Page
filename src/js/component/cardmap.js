import React from "react";
import ShopCrystals from "../../img/shopcrystals.jpg";

function CardMap() {
	let cardLayout = [
		{
			name: "Shop",
			imgUrl:
				"https://images.unsplash.com/photo-1547410295-500c6167d544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
			cardBody:
				"Choose from our collection of Crystals and Accessories to fit your vibe"
		},
		{
			name: "Blog",
			imgUrl:
				"https://images.unsplash.com/photo-1558467778-d82fbc38e072?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
			cardBody: "Learn more about Crystals and how to get on the vibe"
		},
		{
			name: "Community",
			imgUrl:
				"https://images.unsplash.com/photo-1492552085122-36706c238263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1373&q=80",
			cardBody:
				"Stay involved in the Crystal Vibes eminating from your community"
		}
	];
	return cardLayout.map((page, index) => {
		return (
			<div className="col-md-4 mt-5" key={index}>
				<div className="card justify-content-left mx-5 ">
					<img className="card-img-top" src={page.imgUrl} alt="..." />
					<div className="overlay">
						<div className="text">{page.name}</div>
					</div>
					<div className="card-body">
						<p className="card-text text-center">{page.cardBody}</p>
					</div>
				</div>
			</div>
		);
	});
}
export default CardMap;
