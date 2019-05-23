import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			// <!-- Footer -->
			<footer className="footer page-footer font-small special-color-dark pt-4">
				{/* <!-- Footer Elements --> */}
				<div className="container">
					{/* <!-- Social buttons --> */}
					<ul className="list-unstyled list-inline text-center">
						<li className="list-inline-item">
							<a className="btn-floating btn-fb mx-1">
								<i className="fab fa-facebook-f fa-lg"> </i>
							</a>
						</li>
						<li className="list-inline-item">
							<a className="btn-floating btn-tw mx-1">
								<i className="fab fa-twitter fa-lg"> </i>
							</a>
						</li>
						<li className="list-inline-item">
							<a className="btn-floating btn-gplus mx-1">
								<i className="fab fa-google-plus-g fa-lg"> </i>
							</a>
						</li>
						<li className="list-inline-item">
							<a className="btn-floating btn-li mx-1">
								<i className="fab fa-linkedin-in fa-lg"> </i>
							</a>
						</li>
						<li className="list-inline-item">
							<a className="btn-floating btn-instagram mx-1">
								<i className="fab fa-instagram fa-lg"> </i>
							</a>
						</li>
					</ul>
					{/* <!-- Social buttons --> */}
				</div>
				{/* <!-- Footer Elements --> */}
			</footer>
			// <!-- Footer -->
		);
	}
}

export default Footer;
