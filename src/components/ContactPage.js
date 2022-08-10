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

    const stackContactCardVertical = {
        flexDirection: responsive.stackVertical ? "column" : "row",
        maxWidth: responsive.stackVertical ? 350 : 700,
        maxHeight: responsive.stackVertical ? 700 : 350,
        alignItems: responsive.stackVertical ? "center" : "flex-start",
    };

    // information inside my contact card
    const ContactInformation = (
        <div className="ContactInformation">
            <div className="ContactTitle">
                Name:
                <br />
                Santiago Garcia
            </div>
            <div className="ContactTitle">
                Email:
                <br />
                mynameissantiagogarcia@gmail.com
            </div>
            <div className="ContactTitle">
                Phone #:
                <br />
                678-735-9580
            </div>
        </div>
    );

    // variable to store the contents of the project page
    const ContactPage = (
        <div className="ContactPage">
            <div className="ContactCard" style={stackContactCardVertical}>
                <img src={Selfie} alt="Selfie" className="Selfie" />
                {ContactInformation}
            </div>
        </div>
    );

    return ContactPage;
}
