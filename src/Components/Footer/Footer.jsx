import React, { useEffect } from "react";
import "./footer.css";
import "./footer.scss";
import footer_video from "../../Assets/hero3.mp4";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

export const Footer = () => {
  //Create a react hook to add a scroll animation...
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={footer_video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Travel.
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..." "There is no one who loves pain
              itself, who seeks after it and wants to have it, simply because it
              is pain...
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Payment
              </li>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> TripAdvisor
              </li>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Dhule
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Vadodara
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Surat
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" /> Pune
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" /> Ooty
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small> BEST TRAVEL WEBSITE THEME </small>
            <small>COPYRIGHTS RESERVED - EMERGETECH 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};
