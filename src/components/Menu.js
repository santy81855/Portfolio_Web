import React, {
    useState,
    useLayoutEffect,
    useEffect,
    useRef,
    useContext,
} from "react";
import { AppContext } from "../App";
import "../styles/Menu.css";
import Logo from "../images/Logo.png";
import AboutButtonIcon from "../images/about.png";
import PortfolioButtonIcon from "../images/portfolio.png";
import { HomePage, AboutPage, PortfolioPage } from "./Global";

export default function Menu() {
    // here we import the states we have stored in the AppContext in the App.js file
    const { width, setPage, projectContainer } = useContext(AppContext);
    // reference to each button in the menu
    const MenuLogoRef = useRef(null);
    const MenuTextRef = useRef(null);
    const AboutButtonRef = useRef(null);
    const AboutTextRef = useRef(null);
    const PortfolioButtonRef = useRef(null);
    const PortfolioTextRef = useRef(null);
    const MenuRef = useRef(null);
    const [MenuXPosition, setMenuXPosition] = useState(0);

    // set the projectContainer on refresh
    useEffect(() => {
        console.log(projectContainer);
    }, [projectContainer]);

    // get the exact place the menu ends on the screen
    useLayoutEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    // function to set the current window width state
    const updateDimensions = () => {};

    // function to handle clicking the portfolio button
    function portfolioClick() {
        projectContainer.scrollIntoView({ behavior: "smooth" });
    }

    const responsive = {
        showTitleText: width > 600,
        showPortfolioText: width > 480,
        showAboutText: width > 480,
    };

    const showMenuText = {
        display: responsive.showTitleText ? "flex" : "none",
    };
    const showAboutText = {
        display: responsive.showAboutText ? "flex" : "none",
    };
    const showPortfolioText = {
        display: responsive.showPortfolioText ? "flex" : "none",
    };

    // create the text
    const MenuText = (
        <a ref={MenuTextRef} className="LogoText" style={showMenuText}>
            anty
        </a>
    );
    const AboutText = (
        <a ref={AboutTextRef} className="MenuText" style={showAboutText}>
            Contact
        </a>
    );
    const PortfolioText = (
        <a
            ref={PortfolioTextRef}
            className="MenuText"
            style={showPortfolioText}
        >
            Portfolio
        </a>
    );
    // create the buttons
    const MenuLogo = (
        <button
            ref={MenuLogoRef}
            onClick={() => setPage(HomePage)}
            type="button"
            className="MenuLogo"
        >
            <img src={Logo} alt="logo" className="Logo" />
            {MenuText}
        </button>
    );
    const AboutButton = (
        <button
            ref={AboutButtonRef}
            onClick={() => setPage(AboutPage)}
            type="button"
            className="AboutButton"
        >
            <img src={AboutButtonIcon} alt="logo" className="ProfilePicture" />
            {AboutText}
        </button>
    );
    const PortfolioButton = (
        <button
            ref={PortfolioButtonRef}
            onClick={() => setPage(PortfolioPage)}
            type="button"
            className="PortfolioButton"
        >
            <img
                src={PortfolioButtonIcon}
                alt="logo"
                className="SettingsPicture"
            />
            {PortfolioText}
        </button>
    );
    const Menu = (
        <div ref={MenuRef} className="Menu">
            {/*Logo on the left of the menu needs to be a button*/}
            {MenuLogo}
            {/*put profile and settings in their own div so we can add responsiveness*/}
            <div className="ProfileAndSettings">
                {AboutButton}
                {PortfolioButton}
            </div>
        </div>
    );

    return Menu;
}
