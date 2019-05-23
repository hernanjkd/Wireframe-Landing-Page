import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<div className="container-fluid footer">
				<div className="row">
					<div className="col-2" />
					<div className="col-2">
						<a href="#">Contact Us</a>
					</div>
					<div className="col-2">
						<a href="facebook.com">Facebook</a>
					</div>
					<div className="col-2">
						<a href="instagram.com">Instagram</a>
					</div>
					<div className="col-2">
						<a href="twitter.com">Twitter</a>
					</div>
					<div className="col-2" />
				</div>
				<div className="row">
					<div className="col-3" />
					<div className="col-2">
						<a href="#">Shop</a>
					</div>
					<div className="col-2">
						<a href="#">Info</a>
					</div>
					<div className="col-2">
						<a href="#">Community</a>
					</div>
					<div className="col-3" />
				</div>
				<div className="row">
					<div className="col-12 copyright">
						Crystal Vibes &copy; All right reserved
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
