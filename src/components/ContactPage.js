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
import Zigzag from "../images/zigzag_blue.png";

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
    // create a reference
    const dividerRef = useRef(null);
    const copyRef = useRef(null);

    useEffect(() => {
        dividerRef.current.style.animationPlayState = "paused";
    }, []);

    const EMAIL = "santy@santiago-garcia.com";

    // reference to the contact card
    const contactCardRef = useRef(null);
    const responsive = {
        stackVertical: width < 800,
    };

    async function timeout(milliseconds) {
        return new Promise((res) => setTimeout(res, milliseconds));
    }

    async function CopyEmail() {
        const email = EMAIL;
        navigator.clipboard.writeText(email);
        copyRef.current.style.display = "flex";
        await timeout(800);
        copyRef.current.style.display = "none";
    }

    // information inside my contact card
    const ContactInformation = (
        <div className="ContactInformation">
            <div className="ContactName">Santiago Garcia</div>
            <div className="ContactTitle">DEVELOPER</div>
            <div className="ContactPhone">678-735-9580</div>
            <div ref={copyRef} className="ContactCopy">
                Copied!
            </div>
            <div className="ContactEmail" onClick={CopyEmail}>
                {EMAIL}
            </div>
        </div>
    );

    function StopAnimation() {
        contactCardRef.current.style.animationPlayState = "paused";
    }

    function StartAnimation() {
        contactCardRef.current.style.animationPlayState = "running";
    }

    const divider = <div ref={dividerRef} className="HorLineContact"></div>;
    // variable to store the contents of the project page
    const ContactPage = (
        <div className="ContactPage">
            <div ref={contactCardRef} className="Swing">
                {divider}
                <div className="LanyardAngle"></div>
                <div className="LanyardTop"></div>
                <div className="Lanyard"></div>

                <div
                    className="ContactCard"
                    onMouseEnter={StopAnimation}
                    onMouseLeave={StartAnimation}
                >
                    <div className="LanyardHoleContainer">
                        <div className="LanyardHoleSide"></div>
                        <div className="LanyardHoleMiddle"></div>
                        <div className="LanyardHoleSide"></div>
                    </div>
                    <div className="Divider"></div>
                    <img
                        src={Zigzag}
                        alt="Selfie"
                        className="TopCardColorBlock"
                    />
                    <div className="MiddleCardColorBlock"></div>
                    <img src={Selfie} alt="Selfie" className="Selfie" />
                    {ContactInformation}
                </div>
            </div>
        </div>
    );

    return ContactPage;
}
