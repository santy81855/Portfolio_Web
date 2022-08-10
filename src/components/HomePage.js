import React, {
    useState,
    useLayoutEffect,
    useEffect,
    useRef,
    useContext,
} from "react";
import { AppContext } from "../App";
import "../styles/HomePage.css";
import { Colors } from "./Global";
import NextArrow from "../images/next_arrow.png";
import NextArrowDown from "../images/next_arrow_down.png";
import { PortfolioPage } from "./Global";

export default function HomePage() {
    // state to track window width
    const { width, page, setPage, touchScreen } = useContext(AppContext);
    // ref to store the container so we can scroll to it
    const containerRef = useRef(null);
    // reference to the arrow
    const arrowRef = useRef(null);

    useEffect(() => {}, [touchScreen]);

    const touchResponsive = {
        hideOpacity: touchScreen,
    };

    const arrowOpacity = {
        opacity: touchResponsive.hideOpacity ? 1 : 0.3,
    };

    function hover() {
        arrowRef.current.style.opacity = 1;
    }
    function unhover() {
        arrowRef.current.style.opacity = 0.3;
    }
    // Title for the homepage

    // variable to store the contents of the project page
    const HomePage = (
        <div className="HomePage">
            <div className="HomePageHeader" ref={containerRef}>
                <p>
                    <b>Hello,</b> my name is <b>Santiago Garcia</b>, and I am a
                    Computer Science student at the University of Central
                    Florida. I typically follow the roles of a back-end
                    developer, but I greatly enjoy all aspects of software
                    development.
                    <br />
                    <br />I have experience coding in Python, Java, C#, C, and
                    JavaScript. Check out my projects!
                </p>
                <img
                    ref={arrowRef}
                    onClick={() => setPage(PortfolioPage)}
                    src={NextArrowDown}
                    alt="NextArrow"
                    className="NextArrow"
                    style={arrowOpacity}
                    onMouseEnter={hover}
                    onMouseLeave={unhover}
                />
            </div>
        </div>
    );

    return HomePage;
}
