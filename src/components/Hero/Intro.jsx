import { useEffect, useState } from "react";
import decor3 from "../../images/decoration/Group-31.png";
import decor4 from "../../images/decoration/Path-25.png";
import "./Intro.css";
import { useGetHomeDetailsQuery } from "../../Api/api";
import { useGetSocialMediaQuery } from "../../Api/api";

const Intro = () => {
  const { data: conta } = useGetSocialMediaQuery();

  const { data: homeData, isFetching } = useGetHomeDetailsQuery();
  const [homeDetails, setHomeDetails] = useState(homeData);
  const [contacts1Details, setContact2Details] = useState(conta);
  const img_300 = "http://drive.google.com/uc?id=";
  const title_name = homeDetails && homeDetails.map((detail2) => detail2.name);

  useEffect(() => {
    setHomeDetails(homeData);
    setContact2Details(conta);

    document.title = title_name;
    // console.log(conta);
  }, [homeDetails, homeData, contacts1Details, conta, title_name]);
  if (isFetching) return "loading";

  return (
    <>
      {homeDetails &&
        homeDetails.map((detail) => (
          <section className="intro-page" id="home" key={detail.id}>
            <div className="decorations">
              <div className="decor-dot2">
                <img src={decor3} alt="" />
              </div>

              <div className="parcol"></div>
            </div>
            <div className="small-intro">
              <div className="intro-row">
                <div className="col-lg-7  col-md-7 col-sm-12 intro-left">
                  <div className="intro-name">
                    <h3
                      className="hello"
                      data-aos="fade-down"
                      data-aos-duration="1500"
                    >
                      {detail.job_title}
                    </h3>
                    <h3
                      className="name"
                      data-aos="fade-down"
                      data-aos-duration="1600"
                    >
                      {/* Hey! I Am */}
                    </h3>
                    <h3
                      className="job  text-animate"
                      data-aos="fade-down"
                      data-aos-duration="1700"
                    >
                      {detail.name}
                    </h3>
                    <p
                      className="myinfo"
                      data-aos="fade-down"
                      data-aos-duration="1800"
                    >
                      {detail.par_inro}
                    </p>
                  </div>
                  <div
                    // className="intro-btns"
                    data-aos="fade-up"
                    data-aos-duration="1900"
                  >
                    <a
                      href={`mailto:${detail.hireMe_link}`}
                      className="contactMe"
                    >
                      <button className="contact-me">
                        contact <i class="bx bx-send "></i>
                      </button>
                    </a>
                  </div>
                  <div
                    class="intro-contact"
                    data-aos="fade-up"
                    data-aos-duration="1800"
                  >
                    <span>Follow Me:</span>
                    <ul>
                      <li>
                        {contacts1Details &&
                          contacts1Details.map((data1) => (
                            <a
                              href={data1.link}
                              className="icon-link"
                              target="_blank"
                              rel="noopener noreferrer"
                              key={data1.id}
                            >
                              <i className={data1.social_icon}></i>
                            </a>
                          ))}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div
                  className=" col-lg-6 col-md-7  col-sm-12 about_myinfo"
                  data-aos="fade-up-left"
                >
                  <div className="title">
                    <h2>{detail.title}</h2>
                    <h3>{detail.title_2}</h3>
                  </div>
                  <div className="about-description">
                    <div id="foo" unselectable="on" class="unselectable">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${detail.description_one}`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="itscv">
                    <a
                      href="https://drive.google.com/file/d/127RCSy1lUZE2sS8IgkxxPcUqbw1rYMOR/view"
                      download="RESUME.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="download-cv">
                        Download Cv <i class="bx bx-download"></i>
                      </button>
                    </a>
                  </div>
                </div> */}

              </div>
            </div>
          </section>
        ))}
    </>
  );
};

export default Intro;
