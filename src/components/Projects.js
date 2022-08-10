import React, {
    useState,
    useLayoutEffect,
    useEffect,
    useRef,
    useContext,
} from "react";
import { AppContext } from "../App";
import "../styles/Projects.css";
import Codon from "../images/codon.png";
import CodonAnimated from "../images/codon_animated.gif";
import GlassCannon from "../images/glasscannon.png";
import GlassCannonAnimated from "../images/glasscannon_animated.gif";
import Typo from "../images/typo.png";
import TypoAnimated from "../images/typo_animated.gif";
import AutoGrid from "../images/autogrid.png";
import AutoGridAnimated from "../images/autogrid_animated.gif";
import VRCell from "../images/vrcell.png";
import { Colors } from "./Global";

export default function ProjectPage() {
    // state to track window width
    const { width, setProjectContainer, touchScreen } = useContext(AppContext);
    // create references for each of the 5 projects
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const project4Ref = useRef(null);
    const project5Ref = useRef(null);
    // references to each description
    const description1Ref = useRef(null);
    const description2Ref = useRef(null);
    const description3Ref = useRef(null);
    const description4Ref = useRef(null);
    const description5Ref = useRef(null);
    // references to dummy text
    const dummy1Ref = useRef(null);
    const dummy2Ref = useRef(null);
    const dummy3Ref = useRef(null);
    const dummy4Ref = useRef(null);
    const dummy5Ref = useRef(null);
    // references to each title
    const title1Ref = useRef(null);
    const title2Ref = useRef(null);
    const title3Ref = useRef(null);
    const title4Ref = useRef(null);
    const title5Ref = useRef(null);
    const containerRef = useRef(null);
    // states for each of the projects to see if they're hovered
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);
    const [hover5, setHover5] = useState(false);

    useEffect(() => {}, [touchScreen]);

    const touchResponsive = {
        hideOpacity: touchScreen,
    };

    // get the exact place the menu ends on the screen
    useLayoutEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    // function to set the current window width state
    const updateDimensions = () => {};

    // object to determine what should be showing at different window widths
    const responsive = {
        mobileView: width < 480,
        tabletView: width >= 480 && width < 768,
        tabletPortraitView: width >= 768 && width < 1024,
        desktopView: width >= 1024 && width < 1340,
        desktopLargeView: width >= 1340,
    };

    function getItemWidth(responsive) {
        if (responsive.mobileView) {
            return "90vw";
        } else if (responsive.tabletView) {
            return "90vw";
        } else if (responsive.tabletPortraitView) {
            return "90vw";
        } else if (responsive.desktopView) {
            return "45vw";
        } else if (responsive.desktopLargeView) {
            return "22vw";
        }
    }

    const itemWidth = {
        width: getItemWidth(responsive),
        opacity: touchResponsive.hideOpacity ? 1 : 0.6,
        backgroundColor: touchResponsive.hideOpacity
            ? Colors.menuText
            : Colors.background,
        //marginLeft: getItemMargin(responsive),
        //marginRight: getItemMargin(responsive),
    };

    function getItemMargin(responsive) {
        if (responsive.mobileView) {
            return "30px";
        } else if (responsive.tabletView) {
            return "30px";
        } else if (responsive.tabletPortraitView) {
            return "30px";
        } else if (responsive.desktopView) {
            return "10px";
        } else if (responsive.desktopLargeView) {
            return "10px";
        }
    }

    function ProjectClick(link) {
        window.open(link, "_blank", "noopener,noreferrer");
    }

    function ProjectHover(project, description, title) {
        var isTouch = window.matchMedia("(pointer: coarse)").matches;
        var isMouse = window.matchMedia("(pointer: fine)").matches;
        // only show hover events if the user is using a device that has a mouse available
        if ((isMouse && isTouch) || isMouse) {
            // determine whiche project is hovered so we can change to gif
            if (project.current == project1Ref.current) {
                setHover1(true);
            } else if (project.current == project2Ref.current) {
                setHover2(true);
            } else if (project.current == project3Ref.current) {
                setHover3(true);
            } else if (project.current == project4Ref.current) {
                setHover4(true);
            } else if (project.current == project5Ref.current) {
                setHover5(true);
            }
            // set the background color of the project a little darker
            project.current.style.backgroundColor = Colors.menuText;
            // put the opacity to 1 to focus on this project
            project.current.style.opacity = "1";
            // make the title and description color darker
            title.current.style.color = Colors.background;
        }
    }

    function ProjectUnhover(project, description, title) {
        if (project.current == project1Ref.current) {
            setHover1(false);
        } else if (project.current == project2Ref.current) {
            setHover2(false);
        } else if (project.current == project3Ref.current) {
            setHover3(false);
        } else if (project.current == project4Ref.current) {
            setHover4(false);
        } else if (project.current == project5Ref.current) {
            setHover5(false);
        }
        // set the background back to normal
        project.current.style.backgroundColor = Colors.background;
        // put the opacity back to normal
        project.current.style.opacity = "0.5";
        // put the title color back to normal
        title.current.style.color = Colors.text;
    }

    const project1Title = (
        <p ref={title1Ref} className="ProjectTitle">
            VR Cell
        </p>
    );
    const project2Title = (
        <p ref={title2Ref} className="ProjectTitle">
            Glass Cannon
        </p>
    );
    const project3Title = (
        <p ref={title3Ref} className="ProjectTitle">
            Typo
        </p>
    );
    const project4Title = (
        <p ref={title4Ref} className="ProjectTitle">
            AutoGrid
        </p>
    );
    const project5Title = (
        <p ref={title5Ref} className="ProjectTitle">
            Codon
        </p>
    );

    const project1Description = (
        <p ref={description1Ref} className="ProjectDescription">
            A virtual reality tour of a human cell where you get to trigger
            interactions between organelles. Created with Unity and C#.
        </p>
    );
    const project1DummyText = (
        <p ref={dummy1Ref} className="ProjectDescriptionDummy">
            A virtual reality tour of a human cell where you get to trigger
            interactions between organelles. Created with Unity and C#.
        </p>
    );
    const project2Description = (
        <p ref={description2Ref} className="ProjectDescription">
            A 3D game where you play as a glass cannon and shoot down waves of
            incoming enemies. Created with Unity and C#.
        </p>
    );
    const project2DummyText = (
        <p ref={dummy2Ref} className="ProjectDescriptionDummy">
            A 3D game where you play as a glass cannon and shoot down waves of
            incoming enemies. Created with Unity and C#.
        </p>
    );
    const project3Description = (
        <p ref={description3Ref} className="ProjectDescription">
            Desktop application to practice your typing skills. Typing tests
            measure your words per minute and accuracy. Created with Python.
        </p>
    );
    const project3DummyText = (
        <p ref={dummy3Ref} className="ProjectDescriptionDummy">
            Desktop application to practice your typing skills. Typing tests
            measure your words per minute and accuracy. Created with Python.
        </p>
    );
    const project4Description = (
        <p ref={description4Ref} className="ProjectDescription">
            Application used by the SARC department at UCF. It saves tutors
            hours of work each month. Created with Python.
        </p>
    );
    const project4DummyText = (
        <p ref={dummy4Ref} className="ProjectDescriptionDummy">
            Application used by the SARC department at UCF. It saves tutors
            hours of work each month. Created with Python.
        </p>
    );
    const project5Description = (
        <p ref={description5Ref} className="ProjectDescription">
            Modern text editor with syntax highlighting support for 7 languages.
            Created with Python using PyQt.
        </p>
    );
    const project5DummyText = (
        <p ref={dummy5Ref} className="ProjectDescriptionDummy">
            Modern text editor with syntax highlighting support for 7 languages.
            Created with Python using PyQt.
        </p>
    );

    // create the images that will be on each card
    const project1Image = (
        <div className="ProjectImageContainer">
            <img className="ProjectImage" src={VRCell} alt="VRCell" />
        </div>
    );
    const project2Image = (
        <div className="ProjectImageContainer">
            <img className="ProjectImage" src={GlassCannon} alt="GlassCannon" />
        </div>
    );
    const project2Gif = (
        <div className="ProjectImageContainer">
            <img
                className="ProjectImage"
                src={GlassCannonAnimated}
                alt="GlassCannonAnimated"
            />
        </div>
    );
    const project3Image = (
        <div className="ProjectImageContainer">
            <img className="ProjectImage" src={Typo} alt="Typo" />
        </div>
    );
    const project3Gif = (
        <div className="ProjectImageContainer">
            <img
                className="ProjectImage"
                src={TypoAnimated}
                alt="TypoAnimated"
            />
        </div>
    );
    const project4Image = (
        <div className="ProjectImageContainer">
            <img className="ProjectImage" src={AutoGrid} alt="AutoGrid" />
        </div>
    );
    const project4Gif = (
        <div className="ProjectImageContainer">
            <img
                className="ProjectImage"
                src={AutoGridAnimated}
                alt="AutoGridAnimated"
            />
        </div>
    );
    const project5Image = (
        <div className="ProjectImageContainer">
            <img className="ProjectImage" src={Codon} alt="Codon" />
        </div>
    );
    const project5Gif = (
        <div className="ProjectImageContainer">
            <img
                className="ProjectImage"
                src={CodonAnimated}
                alt="CodonAnimated"
            />
        </div>
    );
    const project1Link = "https://github.com/santy81855/VR_Cell";
    const project2Link = "https://github.com/santy81855/Glass_Cannon";
    const project3Link = "https://github.com/santy81855/Typo";
    const project4Link = "https://github.com/santy81855/AutoGrid";
    const project5Link = "https://github.com/santy81855/Codon";
    // create project objects
    const project1 = (
        <div
            ref={project1Ref}
            onClick={() => ProjectClick(project1Link)}
            onMouseEnter={() =>
                ProjectHover(project1Ref, description1Ref, title1Ref)
            }
            onMouseLeave={() =>
                ProjectUnhover(project1Ref, description1Ref, title1Ref)
            }
            style={itemWidth}
            className="ProjectItem"
        >
            {project1Image}
            {project1Title}
            {hover1 === false && project1DummyText}
            {hover1 === true && project1Description}
        </div>
    );
    const project2 = (
        <div
            ref={project2Ref}
            onClick={() => ProjectClick(project2Link)}
            onMouseEnter={() =>
                ProjectHover(project2Ref, description2Ref, title2Ref)
            }
            onMouseLeave={() =>
                ProjectUnhover(project2Ref, description2Ref, title2Ref)
            }
            style={itemWidth}
            className="ProjectItem"
        >
            {hover2 === true && project2Gif}
            {hover2 === false && project2Image}
            {project2Title}
            {hover2 === false && project2DummyText}
            {hover2 === true && project2Description}
        </div>
    );
    const project3 = (
        <div
            ref={project3Ref}
            onClick={() => ProjectClick(project3Link)}
            onMouseEnter={() =>
                ProjectHover(project3Ref, description3Ref, title3Ref)
            }
            onMouseLeave={() =>
                ProjectUnhover(project3Ref, description3Ref, title3Ref)
            }
            style={itemWidth}
            className="ProjectItem"
        >
            {hover3 === true && project3Gif}
            {hover3 === false && project3Image}
            {project3Title}
            {hover3 === false && project3DummyText}
            {hover3 === true && project3Description}
        </div>
    );
    const project4 = (
        <div
            ref={project4Ref}
            onClick={() => ProjectClick(project4Link)}
            onMouseEnter={() =>
                ProjectHover(project4Ref, description4Ref, title4Ref)
            }
            onMouseLeave={() =>
                ProjectUnhover(project4Ref, description4Ref, title4Ref)
            }
            style={itemWidth}
            className="ProjectItem"
        >
            {hover4 === true && project4Gif}
            {hover4 === false && project4Image}
            {project4Title}
            {hover4 === false && project4DummyText}
            {hover4 === true && project4Description}
        </div>
    );
    const project5 = (
        <div
            ref={project5Ref}
            onClick={() => ProjectClick(project5Link)}
            onMouseEnter={() =>
                ProjectHover(project5Ref, description5Ref, title5Ref)
            }
            onMouseLeave={() =>
                ProjectUnhover(project5Ref, description5Ref, title5Ref)
            }
            style={itemWidth}
            className="ProjectItem"
        >
            {hover5 === true && project5Gif}
            {hover5 === false && project5Image}
            {project5Title}
            {hover5 === false && project5DummyText}
            {hover5 === true && project5Description}
        </div>
    );
    // variable to store the contents of the project page
    const ProjectPage = (
        <div className="ProjectPage">
            <div className="ProjectPageHeader" ref={containerRef}>
                <h1 className="ProjectTitleText"></h1>
            </div>

            <div className="ProjectContainer">
                {project1}
                {project2}
                {project3}
                {project5}
                {project4}
            </div>
        </div>
    );

    return ProjectPage;
}
