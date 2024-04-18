import React, { useEffect, useRef, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./test.css";

const Home = () => {
  const [visibleCards, setVisibleCards] = useState(9);

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const sectionRef = useRef();
  const heightRef = useRef();
  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 9);
    // sectionRef.current.scrollTop = sectionRef.current.scrollHeight;
    heightRef.current.scrollIntoView();
  };
  const loadLessCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards - 18);
    sectionRef.current.scrollIntoView();
    // sectionRef.current.scrollTop = sectionRef.current.scrollHeight;
    // console.log(sectionRef.current.scrollHeight);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = toast.loading("Sending Message");
    emailjs
      .send("service_kqk2ltj", "template_4784a3k", values, "9fHBmJNYfeEcPo5hr")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            fullName: "",
            email: "",
            subject: "",
            message: "",
          });
          toast.update(id, {
            render: "Message sent Successfully",
            autoClose: true,
            type: "success",
            isLoading: false,
          });
        },
        (error) => {
          console.log("FAILED", error);
          toast.update(id, {
            render: "Your message don't sent",
            autoClose: true,
            type: "error",
            isLoading: false,
          });
        }
      );
  };
  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const allProjects = [
    {
      portImage: "/assets/images/project3.png",
     projectTitle: "Adepsi",
      link: "https://www.adepsi.com/",
    },
    {
      portImage: "/assets/images/project2.png",
      projectTitle: "Frich",
      link: "https://www.getfrich.com/",
    },
    {
      portImage: "/assets/images/project4.png",
      projectTitle: "Umile",
      link: "https://umile.co.nz/",
    },
    {
      portImage: "/assets/images/project5.png",
      projectTitle: "Zealous",
      link: "https://www.getzealous.com/",
    },
    {
      portImage: "/assets/images/project7.png",
      projectTitle: "Omningage",
      link: "https://www.omningage.cloud/",
    },
   
    
   
    
    
  ];
  const navigate = useNavigate();

  const cofeCard = [
    { cofeeTitle: "Project Done", cofeeNumber: "20" },
    { cofeeTitle: "Hours Of Work", cofeeNumber: "4320" },
  ];
  useEffect(() => {
    AOS.init({
      // Add your AOS configuration here if needed
      duration: 1000,
    });
  }, []);

  return (
    <div>
      {/* mains */}
      <section className="mains" onMouseEnter={() => navigate("#")} id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-8 " data-aos="fade-up">
              <div className="fs-22 fw-600 gray-text"> Hey, My Name Is</div>
              <h1 className="h-primary my-3">Muhammad Haris Khan</h1>
              <div
                className="fs-22 fw-600 gray-text"
                aria-label="A Freelance QA Automation Engineer"
              >
                A Freelance QA &nbsp;
                <span className="yellow-text typewriter nocaret"></span>
              </div>
              <a href="#contact" className="primary-btn text-white mt-4">
                Hire ME
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* about-me */}
      <section
        className="about-me"
        onMouseEnter={() => navigate("#about-me")}
        id="about-me"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div
                className="about-images"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <img src="/assets/images/bg.jpeg" alt="about" />
              </div>
            </div>
            <div className="col-md-7 mt-4 mt-md-0">
              <div
                className="about-titles"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h2 className="h-secondary">ABOUT ME</h2>
                <span className="about-spans yellow-text">01.</span>
              </div>
              <div
                className="about-h3"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                Hello! I am Muhammad Haris Khan
              </div>
              <p
                className="gray-text1 fs-14 mt-5 mb-4"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                🚀 QA Automation Engineer | Cypress | Quality Assurance | API
                Testing | Manual Testing Welcome to my Protfolio! I am an
                accomplished Quality Assurance Engineer with a proven track
                record in manual testing, API testing, and Automation Testing
                using Cypress. My journey in the IT industry has equipped me
                with a robust skill set and a passion for ensuring the delivery
                of high-quality software solutions. Key Skills: Proficient in
                designing, executing, and documenting manual test cases to
                ensure software quality. Experienced in validating and verifying
                API functionality to guarantee seamless communication between
                different software components. Automation Testing (Cypress):
                Skilled in creating automated test scripts using Cypress,
                enhancing efficiency and accuracy in testing processes. A solid
                educational background with a focus on software engineering from
                COMSATS Institute of Information Technology, Abbottabad.
                <br className="d-md-block d-none" />
                Professional Highlights: Successfully contributed to various
                projects, demonstrating adaptability and problem-solving skills.
                Consistently ensured the delivery of high-quality software
                products by implementing effective testing strategies.
                Collaborated with cross-functional teams to understand project
                requirements and provide valuable insights.
              </p>
              <div
                className="personal-info"
                data-aos="fade-up"
                data-aos-duration="3500"
              >
                <div className="d-flex align-items-center gap-3">
                  <div className="contact-circle">
                    <span
                      className="iconify"
                      data-icon="fluent-mdl2:contact"
                    ></span>
                  </div>
                  <p className="mb-0">Muhammad Haris Khan</p>
                </div>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <div className="contact-circle">
                    <span className="iconify" data-icon="ph:phone"></span>
                  </div>
                  <p className="mb-0">+92 3491034900</p>
                </div>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <div className="contact-circle">
                    <span
                      className="iconify"
                      data-icon="ic:outline-mail"
                    ></span>
                  </div>
                  <p className="mb-0">muhammadharisniaxi@gmail.com</p>
                </div>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <div className="contact-circle contact-circle-1">
                    <span
                      className="iconify"
                      data-icon="tdesign:location"
                    ></span>
                  </div>
                  <p className="mb-0">Lahore, Pakistan</p>
                </div>
                <span className="media-links">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/hariskhan7715/"
                    className="fb-links"
                  >
                    <span
                      className="iconify"
                      data-icon="basil:linkedin-outline"
                    ></span>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/harrigit"
                    className="fb-links"
                  >
                    <span class="iconify" data-icon="uiw:github"></span>
                  </a>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=923491034900&amp;text= How  may I help you?"
                    className="fb-links"
                  >
                    <span
                      class="iconify"
                      data-icon="ic:outline-whatsapp"
                    ></span>
                  </a>
                </span>
              </div>
              <a
                href="/assets/images/Muhammad_HARIS_KHAN_SQA_CV.pdf"
                target="_blank"
                className="personal-btn d-inline-flex align-items-center justify-content-center"
                data-aos="fade-up"
                data-aos-duration="4000"
              >
                Europass CV
              </a>

              <a
                href="/assets/images/Haris_SQA_CV(latest).pdf"
                target="_blank"
                className="personal-btn d-inline-flex align-items-center justify-content-center mx-2"
                data-aos="fade-up"
                data-aos-duration="4000"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* services */}
      <section
        className="services"
        onMouseEnter={() => navigate("#services")}
        id="services"
      >
        <div className="container">
          <div className="about-titles" data-aos="fade-up">
            <h2 className="h-secondary">MY SERVICES</h2>
            <span className="about-spans text-green services-counts">02.</span>
          </div>
          <div className="row">
            <div
              className="col-md-3 mt-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="service-card">
                <div className="design-circle">
                  <span className="iconify" data-icon="bi:pen"></span>
                </div>
                <h4 className="fw-600 fs-16 my-3 text-green">Manual Testing</h4>
                <p className="text-dark fs-14">
                  Manual testing isn't just a task for me; it's a meticulous
                  craft that I've perfected over the years. With a keen eye for
                  detail and a systematic approach, I design, execute, and
                  meticulously document manual test cases to ensure that no
                  bug left. 
                </p>
                <div className="service-num text-white">01.</div>
              </div>
            </div>
            <div
              className="col-md-3 mt-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="service-card">
                <div className="design-circle">
                  <span
                    className="iconify"
                    data-icon="solar:flag-linear"
                  ></span>
                </div>
                <h4 className="fw-600 fs-16 my-3 text-green">
                  Automation Testing{" "}
                </h4>
                <p className="text-dark fs-14">
                  Automation testing is where I truly shine, wielding tools like
                  Cypress with finesse and precision. I'm skilled in crafting
                  automated test scripts that streamline the testing process,
                  enhancing efficiency and accuracy exponentially. 
                </p>
                <div className="service-num text-white">02.</div>
              </div>
            </div>
            <div
              className="col-md-3 mt-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="service-card">
                <div className="design-circle">
                  <span className="iconify" data-icon="mdi:code"></span>
                </div>
                <h4 className="fw-600 fs-16 my-3 text-green">API Testing</h4>
                <p className="text-dark fs-14">
                  API testing is where my expertise truly shines. With a deep
                  understanding of API functionality and communication between
                  different software components, I excel in validating and
                  verifying APIs to ensure seamless integration and performance.
        
                </p>
                <div className="service-num text-white">03.</div>
              </div>
            </div>
            <div
              className="col-md-3 mt-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="service-card">
                <div className="design-circle">
                  <span
                    className="iconify"
                    data-icon="icon-park-outline:dribble"
                  ></span>
                </div>
                <h4 className="fw-600 fs-16 my-3 text-green">
                  TestCase development
                </h4>
                <p className="text-dark fs-14">
                  In crafting test cases, I am meticulous and strategic,
                  ensuring comprehensive coverage while maintaining efficiency.
                  I begin by analyzing project requirements, understanding user
                  stories, and identifying critical functionalities.{" "}
                </p>
                <div className="service-num text-white">04.</div>
              </div>
            </div>
            {/* //////////////////////////////////////////////////////////////////////////// */}
            {/* <div className="col-md-3 mt-5" data-aos="fade-up" data-aos-duration="2000">
							<div className="service-card">
								<div className="design-circle">
									<span className="iconify" data-icon="solar:flag-linear"></span>
								</div>
								<h4 className="fw-600 fs-16 my-3">BRANDING</h4>
								<p className="gray-text fs-14">
									Elevate your brand with our expertly crafted service, where innovation meets identity, creating a
									unforgettable mark in the hearts and minds of your audience.
								</p>
								<div className="service-num">02.</div>
							</div>
						</div> */}
            {/* <div className="col-md-3 mt-5" data-aos="fade-up" data-aos-duration="2000">
							<div className="service-card">
								<div className="design-circle">
									<span className="iconify" data-icon="mdi:code"></span>
								</div>
								<h4 className="fw-600 fs-16 my-3">CLEAN CODE</h4>
								<p className="gray-text fs-14">
									Unlock the power of elegance and efficiency with our clean code service, where every line tells a
									story of clarity, simplicity, and reliability, transforming complexity into a seamless digital
									experience.
								</p>
								<div className="service-num">03.</div>
							</div>
						</div> */}
            {/* <div className="col-md-3 mt-5" data-aos="fade-up" data-aos-duration="2000">
							<div className="service-card">
								<div className="design-circle">
									<span className="iconify" data-icon="icon-park-outline:dribble"></span>
								</div>
								<h4 className="fw-600 fs-16 my-3">FAST SUPPORT</h4>
								<p className="gray-text fs-14">
									Experience the speed of seamless solutions with Fast Support, where efficiency meets excellence in
									resolving your needs instantly.
								</p>
								<div className="service-num">04.</div>
							</div>
						</div> */}
          </div>
        </div>
      </section>

      {/* resume */}
      <section
        className="resumes"
        onMouseEnter={() => navigate("#Education")}
        id="Education"
      >
        <div className="container">
          <div className="about-titles" data-aos="fade-up">
            <h2 className="h-secondary">MY RESUME</h2>
            <span className="about-spans yellow-text">03.</span>
          </div>
          <div className="row mt-5" data-aos="fade-up" data-aos-duration="2000">
            <div className="col-md-6">
              <div className="resume-mains">
                <div className="resume-inner">
                  <div className="d-flex align-items-center gap-4">
                    <div className="resume-btn d-flex align-items-center">
                      <div className="school-circle">
                        <span className="iconify" data-icon="cil:school"></span>
                      </div>
                      <div className="text-white">2017 - 2021</div>
                    </div>
                    <div className="gray-text1">Software Engineering</div>
                  </div>
                  <h4 className="fs-18 yellow-text fw-600 my-3">
                    COMSATS UNIVERSITY ISLAMABAD
                  </h4>
                  <p className="gray-text1 fs-14">
                    I have Done Bachelor's degree in Software Engineering.
                    <div className="mt-3">
                      My time in the Software Engineering program not only honed
                      my technical skills but also fueled my passion for
                      tackling real-world challenges. I thrive on finding
                      elegant solutions to problems and enjoy the continuous
                      learning process that comes with the dynamic field of
                      Software Engineering.
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        className="skills"
        onMouseEnter={() => navigate("#skills")}
        id="skills"
      >
        <div className="container">
          <div className="about-titles" data-aos="fade-up">
            <h2 className="h-secondary">MY SKILLS</h2>
            <span className="about-spans yellow-text services-counts">04.</span>
          </div>
          <div className="row mt-5">
            <div className="col-md-5">
              <h4
                className="fs-20 fw-600"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Some About my Abilities
              </h4>
              <p
                className="gray-text fs-14 mt-3"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                Manual Testing Mastery: Crafting, executing, and meticulously
                documenting manual test cases is my bread and butter. I thrive
                on diving deep into the nitty-gritty details, ensuring that
                every nook and cranny of the software is thoroughly examined for
                quality.
              </p>
              <p
                className="gray-text fs-14 mt-3"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                API Testing Aficionado: APIs are the lifeblood of modern
                software, and I'm the conductor ensuring they harmonize
                perfectly. From validating to verifying, I ensure that every
                interaction between software components is seamless and
                error-free.
              </p>
              <p
                className="gray-text fs-14 mt-3"
                data-aos="fade-up"
                data-aos-duration="3500"
              >
                Cypress Wizardry: When it comes to automation testing, Cypress
                is my trusty wand. I wield it with finesse to craft automated
                test scripts that enhance efficiency and accuracy, freeing up
                valuable time for more creative endeavors. Project Prowess:
                Throughout my journey, I've left a trail of successful projects
                in my wake. Adaptability and problem-solving are my middle
                names, and I've consistently delivered high-quality software
                products by weaving effective testing strategies into the
                development process.
              </p>

              {/* <button
                type="buttton"
                className="skills-btn mt-4"
                data-aos="fade-up"
                data-aos-duration="4000"
              >
                My Portfolio
              </button> */}
            </div>
            <div className="col-md-7 mt-5 mt-md-0">
              <div className="skills-tab" data-aos="fade-up">
                <Tabs
                  defaultActiveKey="home"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Professional Skills">
                    <div className="content-main">
                      <div className="progres-main">
                        <div
                          className="progress-inner"
                          style={{ width: "99%" }}
                        ></div>
                        <div className="progress-percentage">
                          <div className="text-dark" style={{ color: "black" }}>
                            Manual Testing
                          </div>
                          <div className="percentage-box">100%</div>
                        </div>
                      </div>
                      <div className="progres-main mt-3">
                        <div
                          className="progress-inner"
                          style={{ width: "90%" }}
                        ></div>
                        <div className="progress-percentage">
                          <div className="text-dark">Automation Testing</div>
                          <div className="percentage-box">80%</div>
                        </div>
                      </div>
                      <div className="progres-main mt-3">
                        <div
                          className="progress-inner"
                          style={{ width: "95%" }}
                        ></div>
                        <div className="progress-percentage">
                          <div className="text-dark">JavaScript</div>
                          <div className="percentage-box">80%</div>
                        </div>
                      </div>
                      <div className="progres-main mt-3">
                        <div
                          className="progress-inner"
                          style={{ width: "75%" }}
                        ></div>
                        <div className="progress-percentage">
                          <div className="text-dark">Testcase Development</div>
                          <div className="percentage-box">95%</div>
                        </div>
                      </div>
                      <div className="progres-main mt-3">
                        <div
                          className="progress-inner"
                          style={{ width: "98%" }}
                        ></div>
                        <div className="progress-percentage">
                          <div className="text-dark">API testing</div>
                          <div className="percentage-box">90%</div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Personal Skills">
                    <div className="content-main">
                      <div className="progres-main">
                        <div
                          className="progress-inner"
                          style={{ width: "95%" }}
                        ></div>
                        <div className="progress-percentage">
                          <div className="gray-text1">Communication</div>
                          <div className="percentage-box">90%</div>
                        </div>
                      </div>
                      <div className="progres-main mt-3">
                        <div
                          className="progress-inner"
                          style={{ width: "80%" }}
                        ></div>
                        <div className="progress-percentage">
                          <div className="gray-text1">Teamwork</div>
                          <div className="percentage-box">80%</div>
                        </div>
                      </div>
                      <div className="progres-main mt-3">
                        <div
                          className="progress-inner"
                          style={{ width: "85%" }}
                        ></div>
                        <div className="progress-percentage">
                          <div className="gray-text1">Self-motivation</div>
                          <div className="percentage-box">85%</div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        className="port"
        onMouseEnter={() => navigate("#Projects")}
        id="Projects"
      >
        <div className="container" ref={sectionRef}>
          <div className="about-titles" data-aos="fade-up">
            <h2 className="h-secondary">MY Projects</h2>
            <span className="about-spans yellow-text">05.</span>
          </div>
          <div className="port-inner mt-5">
            <div className="row">
              {allProjects.slice(0, visibleCards).map((item, index) => {
                return (
                  <>
                    <div
                      className="col-md-4 mb-4"
                      key={index}
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <a href={item.link} target="_blank">
                        <div className="port-card">
                          <div className="port-img">
                            <img src={item.portImage} alt="port-1" />
                            
                          </div>
                          <div className="overlay-port">
                            {/* <div className="port-circles">
																<span className="iconify" data-icon="mdi-light:plus-circle"></span>
															</div> */}
                            <div className="text-white my-4">Project Title</div>
                            <div className="fs-14 fw-600 yellow-text">
                              {item.projectTitle}
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
            {visibleCards < allProjects.length && (
              <div className="text-center">
                <button
                  className="skills-btn mt-md-5 mt-4"
                  onClick={loadMoreCards}
                >
                  Load More
                </button>
              </div>
            )}
            <div ref={heightRef}></div>
            {visibleCards === 27 && (
              <div className="text-center">
                <button
                  className="skills-btn mt-md-5 mt-4"
                  onClick={loadLessCards}
                >
                  Load Less
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* coffe */}
      <section className="coffe">
        <div className="container">
          <div className="row">
            {cofeCard.map((items, index) => {
              return (
                <>
                  <div className="col-md-4" data-aos="fade-up">
                    <div className="coffe-card">
                      <div className="coffe-head">
                        <div className="coffe-circle">
                          <span className="iconify" data-icon="ph:code"></span>
                        </div>
                        <div className="fs-14 fw-600 text-white">
                          {items.cofeeTitle}
                        </div>
                      </div>
                      <div className="fs-30 fw-700 text-white mt-3">
                        <CountUp duration={20} end={items.cofeeNumber} />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact me */}

      <section
        className="contact-me"
        id="contact"
        onMouseEnter={() => navigate("#contact")}
      >
        <div className="container">
          <div className="about-titles" data-aos="fade-up">
            <h2 className="h-secondary">CONTACT ME</h2>
            <span className="about-spans yellow-text services-counts">08.</span>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div
                className="contact-left"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="mt-3">
                  <div className="contact-head">
                    <div className="contact-icon">
                      <span
                        className="iconify"
                        data-icon="system-uicons:location"
                      ></span>
                    </div>
                    <div className="text-white">Location</div>
                  </div>
                  <div className="text-center fw-600 gray-text mt-3">
                    Lahore, Pakistan
                  </div>
                  <div className="text-center fw-600 gray-text mt-1">
                    Johar Town
                  </div>
                </div>
                <div className="mt-3">
                  <div className="contact-head">
                    <div className="contact-icon">
                      <span className="iconify" data-icon="carbon:email"></span>
                    </div>
                    <div className="text-white">Email</div>
                  </div>
                  <div className="text-center fw-600 gray-text mt-3">
                    muhammadharisniaxi@gmail.com
                  </div>
                </div>
                <div className="mt-3">
                  <div className="contact-head">
                    <div className="contact-icon">
                      <span className="iconify" data-icon="ph:phone"></span>
                    </div>
                    <div className="text-white">Phone</div>
                  </div>
                  <div className="text-center fw-600 gray-text mt-3">
                    +92 3491034900
                  </div>
                </div>
                <div className="mt-3">
                  <div className="contact-head">
                    <div className="contact-icon">
                      <span
                        className="iconify"
                        data-icon="streamline:web"
                      ></span>
                    </div>
                    <div className="text-white">Website</div>
                  </div>
                  <div className="text-center fw-600 gray-text mt-3">
                    https://de-ahmad.netlify.app/
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-8 mt-5 mt-md-0"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <form onSubmit={handleSubmit}>
                <div className="contact-right">
                  <div className="input-handles">
                    <input
                      type="text"
                      name="fullName"
                      value={values.fullName}
                      onChange={handleChange}
                      required
                    />
                    <label className="fs-14 fw-500 text-white">Name:</label>
                  </div>

                  <div className="input-handles mt-5">
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      required
                      onChange={handleChange}
                    />
                    <label className="fs-14 fw-500 text-white">E-mail:</label>
                  </div>

                  <div className="input-handles mt-5">
                    <input
                      type="text"
                      name="subject"
                      value={values.subject}
                      required
                      onChange={handleChange}
                    />
                    <label className="fs-14 fw-500 text-white">Subject:</label>
                  </div>

                  <div className="textarea-handles input-handles mt-5">
                    <textarea
                      onChange={handleChange}
                      value={values.message}
                      name="message"
                      required
                    ></textarea>
                    <label className="fs-14 fw-500 text-white">Message:</label>
                  </div>
                  <button type="submit" className="meassage-btn mt-4">
                    send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer />
    </div>
  );
};

export default Home;
