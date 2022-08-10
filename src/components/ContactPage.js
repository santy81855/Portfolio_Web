import React, {
    useState,
    useLayoutEffect,
    useEffect,
    useRef,
    useContext,
} from "react";
import { AppContext } from "../App";
import "../styles/ContactPage.css";
import { Colors } from "./Global";
import Selfie from "../images/selfie.png";
import Zigzag from "../images/zigzag.png";

export default function ContactPage() {
    // state to track window width
    const {
        width,
        page,
        setPage,
        setProjectContainer,
        setHomePageContainer,
        homePageContainer,
    } = useContext(AppContext);

    const responsive = {
        stackVertical: width < 800,
    };

    // information inside my contact card
    const ContactInformation = (
        <div className="ContactInformation">
            <div className="ContactName">Santiago Garcia</div>
            <div className="ContactTitle">Developer</div>
            <div className="ContactPhone">678-735-9580</div>
            <div className="ContactEmail">mynameissantiagogarcia@gmail.com</div>
        </div>
    );

    // variable to store the contents of the project page
    const ContactPage = (
        <div className="ContactPage">
            <div className="Lanyard"></div>

            <div className="ContactCard">
                <div className="LanyardHoleContainer">
                    <div className="LanyardHoleSide"></div>
                    <div className="LanyardHoleMiddle"></div>
                    <div className="LanyardHoleSide"></div>
                </div>
                <div className="Divider"></div>
                <img src={Zigzag} alt="Selfie" className="TopCardColorBlock" />
                <div className="MiddleCardColorBlock"></div>
                <img src={Selfie} alt="Selfie" className="Selfie" />
                {ContactInformation}
            </div>
        </div>
    );

    return ContactPage;
}
