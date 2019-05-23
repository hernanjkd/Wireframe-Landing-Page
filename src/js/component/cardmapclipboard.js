import React from "react";

function CardMap() {
	let cardLayout = [
		{
			name: "Tiarra",
			company: "Still Sports",
			position: "Fashionista",
			imgUrl:
				"https://prod.cdn.balr.com/sylius_medium/78/c2/69528737ad6608b38bbf8e46d161.png",
			tagline: "listen"
		},
		{
			name: "Joao",
			company: "Still Sports",
			position: "Sport Fashin Strategist",
			imgUrl:
				"https://i.ebayimg.com/images/g/CnkAAOSwIphbNp7C/s-l400.jpg",
			tagline: "is this working?"
		},
		{
			name: "Hernan",
			company: "Crystal Vibrations",
			position: "Crystal Website Enthusiast",
			imgUrl:
				"https://cdn.shopify.com/s/files/1/0719/7981/products/ffd5adf3-7770-5773-ab78-126f0ffe2888_400x.jpg?v=1511338103",
			tagline: "we finally got to react!"
		},
		{
			name: "Martin",
			company: "Crystal Vibrations",
			position: "Chief Vibrations Engineer",
			imgUrl:
				"https://i.ebayimg.com/images/g/5pYAAOSwlAZaXFIC/s-l400.jpg",
			tagline: "check out mah crystals"
		}
	];
	return (
		<div>
			{cardLayout.map((student, index) => (
				<div key={student.name + index}>
					<h1>{student.name}</h1>
					<h2>of {student.company}</h2>
					<p>Position: {student.position}</p>
					<img
						src={student.imgUrl}
						alt={`${student.name}`}
						width="200"
					/>
					<hr />
					<p>{student.tagline}</p>
				</div>
			))}{" "}
		</div>
	);
}
export default CardMap;
