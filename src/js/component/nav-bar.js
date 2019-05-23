import React from "react";

class Nav extends React.Component {
	render() {
		return (
			<nav className="navbar text-white navbar-dark">
				<a className="coName navbar-brand" href="#">
					Crystal Vibes
				</a>

				<form className="input-group my-2 col-md-2">
					<input
						type="text"
						className="innerSearch form-control"
						placeholder="Search"
						aria-label="search"
						aria-describedby="button-addon2"
					/>
					<div className="input-group-append">
						<button
							className="btn btn-outline-light"
							type="button"
							id="button-addon2">
							<i className="fas fa-search" />
						</button>
					</div>
				</form>
			</nav>
		);
	}
}

export default Nav;
