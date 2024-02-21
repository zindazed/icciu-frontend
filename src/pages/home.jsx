import logo from "../logo.svg";
import "../App.css";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
// import Link from "react-router-dom";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import { StyleClass } from "primereact/styleclass";
import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";
import { Divider } from "primereact/divider";
// import { LayoutContext } from "../../layout/context/layoutcontext";
// import { NodeRef } from "@/types";
import { classNames } from "primereact/utils";

function HomePage() {
  const [isHidden, setIsHidden] = useState(false);
  //   const { layoutConfig } = useContext(LayoutContext);
  const menuRef = useRef(null);

  const toggleMenuItemClick = () => {
    setIsHidden((prevState) => !prevState);
  };
  return (
    <div className="surface-0 flex justify-content-center">
      <div id="home" className="landing-wrapper overflow-hidden">
        <div className="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static">
          <a href="/" className="flex align-items-center">
            <img
              src={`/layout/images/logo-1.png`}
              alt="ICCIU Logo"
              height="50"
              className="mr-0 lg:mr-2"
            />
            <span className="text-900 font-medium text-2xl line-height-3 mr-8">
              ICCIU
            </span>
          </a>
          <StyleClass
            nodeRef={menuRef}
            selector="@next"
            enterClassName="hidden"
            leaveToClassName="hidden"
            hideOnOutsideClick
          >
            <i
              ref={menuRef}
              className="pi pi-bars text-4xl cursor-pointer block lg:hidden text-700"
            ></i>
          </StyleClass>
          <div
            className={classNames(
              "align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2",
              { hidden: isHidden }
            )}
            style={{ top: "100%" }}
          >
            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
              <li>
                <a
                  href="#home"
                  onClick={toggleMenuItemClick}
                  className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                >
                  <span>Home</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={toggleMenuItemClick}
                  className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                >
                  <span>About Us</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={toggleMenuItemClick}
                  className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                >
                  <span>Services</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={toggleMenuItemClick}
                  className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                >
                  <span>Contact Us</span>
                  <Ripple />
                </a>
              </li>
            </ul>
            <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
              <a href="/auth/login">
                <Button
                  label="Login"
                  text
                  rounded
                  className="border-none font-light line-height-2 text-blue-500"
                ></Button>
              </a>
              <a href="/auth/register">
                <Button
                  label="Register"
                  rounded
                  className="border-none ml-5 font-light line-height-2 bg-blue-500 text-white"
                ></Button>
              </a>
            </div>
          </div>
        </div>
        <div
          id="hero"
          className="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
          style={{
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%)",
            clipPath: "ellipse(150% 87% at 93% 13%)",
          }}
        >
          <div className="mx-4 md:mx-8 mt-0 md:mt-4">
            <h1 className="md:text-6xl text-2xl text-center font-bold text-gray-900 line-height-2">
              <span className="font-light block"></span>ISLAMIC CHAMBER OF
              COMMERCE AND INDUSTRY UGANDA
            </h1>
            <p className="font-normal md:text-2xl text-1x1 line-height-3 md:mt-3 text-gray-700">
              A Company Limited by Guarantee incorporated in 2010 in Uganda as a
              member of OIC. The Chamber is affiliated to the Islamic Chamber of
              Commerce and industry (ICCI) of Karachi, which is a private sector
              arm of the Organisation of Islamic Cooperation of 57-Member
              States....{" "}
            </p>
            <a href="#about">
              <Button
                type="button"
                label="Read More"
                rounded
                className="text-xl border-none mb-3 bg-blue-500 font-normal line-height-3 px-3 text-white"
              ></Button>
            </a>
          </div>
          <div className="flex justify-content-center md:justify-content-end">
            {/* <img src="/demo/images/landing/screen-1.png" alt="Hero Image" className="w-9 md:w-auto" /> */}
            <img
              src="/demo/images/landing/icciu-1.png"
              alt="Hero Image"
              className="w-9 md:w-auto"
            />
          </div>
        </div>

        <div id="about" className="py-0 px-4 lg:px-8 mt-0 mx-0 lg:mx-8">
          <div className="grid justify-content-center">
            <div className="col-12 text-center mt-5 md:mb-4 mb-0">
              <h2 className="text-900 font-normal md:mb-2 mb-0">About Us</h2>
              {/* <span className="text-600 text-2xl">Placerat in egestas erat...</span> */}
            </div>

            <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: "210px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <h5 className="mb-2 text-900">VISION</h5>
                  <span className="text-600">
                    A sustainably transformed public private sector championing
                    global trade.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: "210px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(145,226,237,0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <h5 className="mb-2 text-900">MISSION</h5>
                  <span className="text-600">
                    To promote trade value chains at national and international
                    repute through fostering conducive policy frameworks that
                    enable members to achieve sustainable economic
                    transformation.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: "210px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <h5 className="mb-2 text-900">CORE VALUES</h5>
                  <span className="text-600">
                    <ol>
                      <li>Policy and advocacy</li>
                      <li>Capacity building and Research</li>
                      <li>Networking</li>
                      <li>Value chain growth</li>
                      <li>Ethics and Business Sustainability</li>
                      <li>Accountability</li>
                    </ol>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-12 mt-2 mb-3 p-4  md:py-4 md:px-8"
              style={{
                borderRadius: "20px",
                background:
                  "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EFE1AF 0%, #C3DCFA 100%)",
              }}
            >
              <div className="flex flex-column justify-content-center align-items-center text-center px-3 py-1 md:py-0">
                <h3 className="text-gray-900 mb-2">MANDATE</h3>
                <span className="text-gray-600 text-2xl">ICCIU</span>
                <p
                  className="text-gray-900 sm:line-height-2 md:line-height-4 text-1x2 mt-4"
                  style={{ maxWidth: "800px" }}
                >
                  The Islamic Chamber of Commerce and Industry Uganda (ICCIU) is
                  a Company Limited by Guarantee incorporated in 2010 in Uganda
                  as a member of OIC. The Chamber is affiliated to the Islamic
                  Chamber of Commerce and industry (ICCI) of Karachi, which is a
                  private sector arm of the Organisation of Islamic Cooperation
                  of 57-Member States.
                </p>
                <p
                  className="text-gray-900 sm:line-height-2 md:line-height-4 text-1x2 mt-4"
                  style={{ maxWidth: "800px" }}
                >
                  ICCIU works to promote a vibrant Private Sector and foster
                  collaborations with local, regional and global chambers of
                  commerce, governments, international organizations,
                  educational and religious institutions in business, policy
                  advocacy, information technology, capacity building, Research
                  &amp; Innovations and agriculture.
                </p>
                <p
                  className="text-gray-900 sm:line-height-2 md:line-height-4 text-1x2 mt-4"
                  style={{ maxWidth: "800px" }}
                >
                  Currently the Chamber is implementing a number of business
                  program models under ICCIU Principles and her set goals
                  through Public Private Partnerships (PPPs) for economic
                  transformation.
                </p>
                <p
                  className="text-gray-900 sm:line-height-2 md:line-height-4 text-1x2 mt-4"
                  style={{ maxWidth: "800px" }}
                >
                  Since 2010, The Chamber has been at the forefront of driving
                  private sector business negotiations at National, Regional and
                  Global Trade levels to meet Uganda’s vision 2040 “Middle
                  income country”.
                </p>
                <p
                  className="text-gray-900 sm:line-height-2 md:line-height-4 text-1x2 mt-4"
                  style={{ maxWidth: "800px" }}
                >
                  ICCIU has represented Uganda’s private sector in the EAC and
                  tripartite deliberations and is committed to building
                  sustainable business prosperity among private and public
                  sector players.
                </p>
                <img
                  src="/demo/images/landing/ICCIU-2.png"
                  className="mt-4"
                  alt="ICCIU Logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="services" className="py-4 px-4 lg:px-0 mx-0 my-6 lg:mx-8">
          <div id="services" className="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8">
            <div className="text-center">
              <h2 className="text-900 font-normal mb-2">Services Offered</h2>
              {/* <span className="text-600 text-2xl">Amet consectetur adipiscing elit...</span> */}
            </div>

            <div className="grid mt-8 pb-2 md:pb-8">
              <div
                className="flex justify-content-center col-12 lg:col-6 bg-purple-100 p-0 flex-order-1 lg:flex-order-0"
                style={{ borderRadius: "8px" }}
              >
                <img
                  src="/demo/images/landing/business.png"
                  className="w-11"
                  alt="Business Services"
                />
              </div>

              <div className="col-12 lg:col-6 my-auto flex flex-column lg:align-items-end text-center lg:text-right">
                <div
                  className="flex align-items-center justify-content-center bg-purple-200 align-self-center lg:align-self-end"
                  style={{
                    width: "4.2rem",
                    height: "4.2rem",
                    borderRadius: "10px",
                  }}
                >
                  <i className="pi pi-fw pi-mobile text-5xl text-purple-700"></i>
                </div>
                <h2 className="line-height-1 text-900 text-4xl font-normal">
                  We're Here to Assist You
                </h2>
                <span
                  className="text-700 text-2xl line-height-3 ml-0 md:ml-2"
                  style={{ maxWidth: "650px" }}
                >
                  We bring the Islamic private sector businesses together to
                  discuss challenges, build entrepreneurship capacities, and
                  celebrate the wins and produce research and development
                  studies on topical issues affecting the membership.
                </span>
              </div>
            </div>

            <div className="grid my-8 pt-2 md:pt-8">
              <div className="col-12 lg:col-6 my-auto flex flex-column text-center lg:text-left lg:align-items-start">
                <div
                  className="flex align-items-center justify-content-center bg-yellow-200 align-self-center lg:align-self-start"
                  style={{
                    width: "4.2rem",
                    height: "4.2rem",
                    borderRadius: "10px",
                  }}
                >
                  <i className="pi pi-fw pi-desktop text-5xl text-yellow-700"></i>
                </div>
                <h2 className="line-height-1 text-900 text-4xl font-normal">
                  Membership
                </h2>
                <span
                  className="text-700 text-2xl line-height-3 mr-0 md:mr-2"
                  style={{ maxWidth: "650px" }}
                >
                  <ul>
                    <li>Small medium enterprises (SMEs)</li>
                    <li>Corporate Companies</li>
                    <li>Manufactures</li>
                    <li>Civil society Organizations (CSOs)</li>
                    <li>Foreign Direct Investments (FDIs)</li>
                    <li>Ministries, Departments and Agencies (MDAs)</li>
                  </ul>
                </span>
              </div>

              <div
                className="flex justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-6 bg-yellow-100 p-0"
                style={{ borderRadius: "8px" }}
              >
                <img
                  src="/demo/images/landing/membership.png"
                  className="w-11"
                  alt="Membership Services"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="py-4 px-4 lg:px-8 my-2 md:my-4">
          <div id="contact" className="py-4 px-4 lg:px-8 my-2 md:my-4">
            <div className="text-center">
              <h2 className="text-900 font-normal mb-2">Contact Us</h2>
            </div>

            <div className="grid justify-content-between mt-8 md:mt-0">
              <div className="col-12 lg:col-4 p-0 md:p-3">
                <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                  <span className="text-600 text-2xl">Location</span>
                  <p className="text-900">King Fahad Plaza, 5th Floor,</p>
                  <p className="text-900">Kampala Road</p>
                </div>
              </div>

              <div className="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
                <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                  <span className="text-600 text-2xl">P.O. Box</span>
                  <p className="text-900">136403,</p>
                  <p className="text-900">Kampala</p>
                </div>
              </div>

              <div className="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
                <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                  <span className="text-600 text-2xl">Contact Information</span>
                  <p className="text-900">
                    <b>Tel:</b> +256700181158/+256703887044
                  </p>
                  <p className="text-900">
                    <b>Email:</b> info@icciu.org.ug
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 px-4 mx-0 mt-8 lg:mx-8">
          <div className="py-4 px-4 mx-0 mt-8 lg:mx-8">
            <div className="grid justify-content-between">
              <div className="col-12 md:col-2" style={{ marginTop: "-1.5rem" }}>
                <a
                  href="/"
                  className="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer"
                >
                  <img
                    src={`/layout/images/logo-1.png`}
                    alt="ICCIU Logo"
                    width="50"
                    height="50"
                    className="mr-2"
                  />
                  <span className="font-medium text-3xl text-900">ICCIU</span>
                </a>
              </div>

              <div className="col-12 md:col-10 lg:col-7">
                <div className="grid text-center md:text-left">
                  <div className="col-12 md:col-3">
                    <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">
                      Company
                    </h4>
                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                      Mandate
                    </a>
                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                      Key Activities
                    </a>
                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                      Membership
                    </a>
                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                      Partnerships
                    </a>
                  </div>

                  <div className="col-12 md:col-3 mt-4 md:mt-0">
                    <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">
                      Quick Links
                    </h4>
                    <a
                      className="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                      href="#home"
                    >
                      Home
                    </a>
                    <a
                      className="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                      href="#about"
                    >
                      About US
                    </a>
                    <a
                      className="line-height-3 text-xl block cursor-pointer text-700"
                      href="#services"
                    >
                      Services
                    </a>
                    <a
                      className="line-height-3 text-xl block cursor-pointer text-700"
                      href="#contact"
                    >
                      Contact Us
                    </a>
                  </div>

                  <div className="col-12 md:col-3 mt-4 md:mt-0">
                    <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">
                      Community
                    </h4>
                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                      Facebook
                    </a>
                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                      LinkedIn
                      <img
                        src="/demo/images/landing/new-badge.svg"
                        className="ml-2"
                        alt="badge"
                      />
                    </a>
                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                      Twitter(X)
                    </a>
                    <a className="line-height-3 text-xl block cursor-pointer text-700">
                      Instagram
                    </a>
                  </div>

                  <div className="col-12 md:col-3 mt-4 md:mt-0">
                    <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">
                      Legal
                    </h4>
                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                      Brand Policy
                    </a>
                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                      Privacy Policy
                    </a>
                    <a className="line-height-3 text-xl block cursor-pointer text-700">
                      Terms of Service
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
