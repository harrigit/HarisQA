import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "animate.css/animate.min.css";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [active, setActive] = useState(false);
	const [navActive, setNavActive] = useState("home");
	const location = useLocation();

	const handleClickScroll = (id) => {
		const element = document.getElementById(`${id}`);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleScroll = () => {
		// Check if the user has scrolled beyond a certain point in the page.
		if (window.scrollY > 30) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		// Add a scroll event listener when the component mounts.
		window.addEventListener("scroll", handleScroll);

		// Remove the event listener when the component unmounts.
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if (location.hash === "") {
			setNavActive("home");
		} else if (location.hash === "#about-me") {
			setNavActive("about");
		} else if (location.hash === "#services") {
			setNavActive("services");
		} else if (location.hash === "#Education") {
			setNavActive("Education");
		} else if (location.hash === "#skills") {
			setNavActive("skills");
		} else if (location.hash === "#portfolio") {
			setNavActive("portfolio");
		} else if (location.hash === "#contact") {
			setNavActive("contact");
		}
		console.log(location);
	}, [location.hash]);

	const homeNav = () => {
		if (document.body.classList.contains("home-sm")) {
			document.body.classList.remove("home-sm");
		} else {
			document.body.classList.add("home-sm");
		}
	};

	return (
		<div>
			<Navbar expand="lg" className={` ${isScrolled ? "active-nav animated animate__fadeInDown" : ""}`}>
				<div className="container">
					<Navbar.Brand>
						<span className="yellow-text">H</span>aris
					</Navbar.Brand>
					<a
						onClick={() => {
							homeNav();
							setActive(!active);
						}}
						className="toggle-icon index-30 hamburger-menu">
						<div id="nav-icon1" className={!active ? "" : "open"}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</a>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto gap-4">
							<div className="d-flex justify-content-between">
								<Nav.Link
									as={Link}
									to="#home"
									className={navActive == "home" ? "active" : ""}
									onClick={() => {
										handleClickScroll("home");
										homeNav();

										setNavActive("home");
										setActive(!active);
									}}>
									Home
								</Nav.Link>
							</div>
							<Nav.Link
								as={Link}
								to="#about-me"
								className={navActive == "about" ? "active" : ""}
								onClick={() => {
									handleClickScroll("about-me");
									homeNav();

									setNavActive("about");
									setActive(!active);
								}}>
								About
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="#services"
								className={navActive == "services" ? "active" : ""}
								onClick={() => {
									handleClickScroll("services");
									homeNav();

									setNavActive("services");
									setActive(!active);
								}}>
								Services
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="#Education"
								className={navActive == "Education" ? "active" : ""}
								onClick={() => {
									handleClickScroll("Education");
									homeNav();

									setNavActive("Education");
									setActive(!active);
								}}>
								Education
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="#skills"
								className={navActive == "skills" ? "active" : ""}
								onClick={() => {
									handleClickScroll("skills");
									homeNav();

									setNavActive("skills");
									setActive(!active);
								}}>
								Skills
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="#portfolio"
								className={navActive == "portfolio" ? "active" : ""}
								onClick={() => {
									handleClickScroll("portfolio");
									homeNav();

									setNavActive("portfolio");
									setActive(!active);
								}}>
								Portfolio
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="#contact"
								className={navActive == "contact" ? "active" : ""}
								onClick={() => {
									handleClickScroll("contact");
									homeNav();

									setNavActive("contact");
									setActive(!active);
								}}>
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</div>
	);
};

export default Header;
