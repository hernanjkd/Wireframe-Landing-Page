import React from "react";
import Carousel from "./carousel2.js";
import Chrysocolla from "../../img/chrysocolla.jpg";
import Amethyst from "../../img/amethyst.jpg";
import Quartz from "../../img/quartz.png";
import Moldavite from "../../img/moldavite.jpg";

class CarouselReact extends React.Component {
	render() {
		return (
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={Chrysocolla}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>Chrysocolla</h3>
						<p>
							Chyrsocolla is first and foremost a Stone of
							Communication. Its very essence is devoted to
							expression, empowerment and teaching. The serenity
							of its turquoise-blue color discharges negative
							energies, calms, and allows truth and inner wisdom
							to surface and be heard.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={Amethyst}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>Amethyst</h3>
						<p>
							Chyrsocolla is first and foremost a Stone of
							Communication. Its very essence is devoted to
							expression, empowerment and teaching. The serenity
							of its turquoise-blue color discharges negative
							energies, calms, and allows truth and inner wisdom
							to surface and be heard.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={Quartz}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Clear Quartz</h3>
						<p>
							Quartz is the most powerful healing stone of the
							mineral kingdom, able to work on any condition.
							Clear Quartz is known as the stone of power and
							amplifies any energy or intention. Clear Quartz
							protects against negativity, attunes to your higher
							self, and relieves pain.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={Moldavite}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Moldavite</h3>
						<p>
							If you are holding or wearing a moldavite and you
							get an epiphany, do not be surprised at all.
							Aligning your path with your destiny is one of the
							key metaphysical properties of moldavite. It is an
							olive-green colored tektite, which was formed due to
							the impact of a meteorite with earth. It is often
							said that the clear green-colored stone in the Holy
							grail was a moldavite. It is also referred to as a
							talisman for healing the Earth.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		);
	}
}

export default CarouselReact;
