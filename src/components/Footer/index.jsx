import React from "react";

const Footer = () => {
	return (
		<div>
			{/* footer */}
			<section className="footer">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-6">
							<div className="footer-inner">
								<div className="fs-30 fw-700 text-yellow1">
									<span className="yellow-text">H</span>ARIS
								</div>
								<div className="d-flex align-items-center gap-3 mt-2">
									<a target="_blank" href="https://www.linkedin.com/in/hariskhan7715/" className="footer-links">
										<span className="iconify" data-icon="basil:linkedin-outline"></span>
									</a>
									<a target="_blank" href="https://github.com/harrigit" className="footer-links">
										<span class="iconify" data-icon="uiw:github"></span>
									</a>
									<a
										target="_blank"
										href="https://api.whatsapp.com/send?phone=923491034900&amp;text= How  may I help you?"
										className="footer-links">
										<span class="iconify" data-icon="ic:outline-whatsapp"></span>
									</a>
									
								</div>
								<div className="text-white fs-16 fw-600 mt-2">
									All Right Reserved © 2024{" "}
									<a href="#" target="_black" className="yellow-text">
										Design By Muhammad Haris Khan
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Footer;
