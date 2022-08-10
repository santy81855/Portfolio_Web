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
import { PortfolioPage } from "./Global";

export default function HomePage() {
    // state to track window width
    const {
        width,
        page,
        setPage,
        setProjectContainer,
        setHomePageContainer,
        homePageContainer,
    } = useContext(AppContext);
    // ref to store the container so we can scroll to it
    const containerRef = useRef(null);

    // set the homepagecontainer on refresh
    useEffect(() => {
        setHomePageContainer(containerRef.current);
    }, []);

    // Title for the homepage

    // variable to store the contents of the project page
    const HomePage = (
        <div className="HomePage">
            <div className="HomePageHeader" ref={containerRef}>
                <p>
                    <b>Hello,</b> my name is <b>Santiago Garcia</b>, and I am a
                    Computer Science student at the University of Central
                    Florida. I have followed the role of back-end developer, but
                    I greatly enjoy all aspects of software development.
                    <br />
                    <br />I have experience coding in Python, Java, C#, C, and
                    JavaScript. Check out my projects!
                </p>
                <img
                    onClick={() => setPage(PortfolioPage)}
                    src={NextArrow}
                    alt="NextArrow"
                    className="NextArrow"
                />
            </div>
        </div>
    );

    return HomePage;
}
