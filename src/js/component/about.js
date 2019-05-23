import React from "react";
import ShopCrystals from "../../img/shopcrystals.jpg";

class About extends React.Component {
	render() {
		return (
			<div className="row p-5">
				<div className="jumbotron jumbobgnew">
					<h2 className="display-6 font-italic text-danger">
						{" "}
						About us
					</h2>
					<p className="lead">
						Crystal Vibes was founded in 2018 and has grown into a
						leading provider of beads, cabochons, jewelery and
						gemstone carvings for the market. Our company based in
						Miami, Florida. We buy from domestic and overseas
						sources, thereby extending significant cost savings to
						our clients. Our contacts with overseas cutting
						factories insures high quality in our finished product.{" "}
					</p>

					<h3>Only the best crystals</h3>
					<p>
						Crystals carries an extensive line of collector gemstone
						carvings for museums, galleries, interior decorator
						objet d’art, corporate award functions, personal
						collections, etc. We specialize in turquoise, ruby,
						tourmaline and other precious and semiprecious gemstone
						carvings offered both as unique, one-of-a-kind items to
						lines of gift items of any quantity, with prices ranging
						from $20.00 to $50,000.00 per piece and up. We and our
						suppliers travel throughout the world and maintain an
						extensive network of contacts to ensure a steady supply
						of quality gemstone rough for our one-of-a-kind pieces.
					</p>
					<hr className="my-4" />

					<p>
						Can&#39;t find the something that you are looking for?
						We want to hear from you!
					</p>

					<a className="btn btn-info btn-sm" href="#" role="button">
						Contact us
					</a>
				</div>
			</div>
		);
	}
}
export default About;
