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
import GlassCannon from "../images/glasscannon.png";
import Typo from "../images/typo.png";
import AutoGrid from "../images/autogrid.png";
import VRCell from "../images/vrcell.png";
import { Colors } from "./Global";

export default function ProjectPage() {
    // state to track window width
    const { width, setProjectContainer } = useContext(AppContext);
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
    // references to each title
    const title1Ref = useRef(null);
    const title2Ref = useRef(null);
    const title3Ref = useRef(null);
    const title4Ref = useRef(null);
    const title5Ref = useRef(null);
    const containerRef = useRef(null);
    // array to store which project tiles are currently hovered
    var hoverArr = [];

    // set the projectContainer on refresh
    useEffect(() => {
        setProjectContainer(containerRef.current);
    }, []);

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
            return "95vw";
        } else if (responsive.tabletView) {
            return "95vw";
        } else if (responsive.tabletPortraitView) {
            return "95vw";
        } else if (responsive.desktopView) {
            return "45vw";
        } else if (responsive.desktopLargeView) {
            return "45vw";
        }
    }

    const itemWidth = {
        width: getItemWidth(responsive),
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
            // ensure that there are no leftover hovered tiles from previous hovers
            //(this is to account for onMouseLeave not working right)
            if (hoverArr.length > 0) {
                // for any that are unhovered just unhover them
                for (var i = 0; i < hoverArr.length; i++) {
                    var element = hoverArr[i];
                    element.project.current.style.backgroundColor =
                        Colors.background;
                    // put the opacity back to normal
                    element.project.current.style.opacity = "0.3";
                    // hide the description for this project
                    element.description.current.style.display = "none";
                    // put the title and description color back to normal
                    element.title.current.style.color = Colors.text;
                    element.description.current.style.color = Colors.text;
                }
                // then delete the array
                hoverArr = [];
            }

            // store the current tile as being hovered
            var tile = {
                project: project,
                description: description,
                title: title,
            };
            hoverArr.push(tile);
            // set the background color of the project a little darker
            project.current.style.backgroundColor = Colors.menuText;
            // put the opacity to 1 to focus on this project
            project.current.style.opacity = "1";
            // hide then show the title
            title.current.style.display = "none";
            title.current.style.display = "flex";
            // show the description for this project
            description.current.style.display = "flex";
            // make the title and description color darker
            title.current.style.color = Colors.background;
            description.current.style.color = Colors.background;
        }
    }

    function ProjectUnhover(project, description, title) {
        // delete the current tile from the hover array
        if (hoverArr.length == 1) {
            hoverArr = [];
        }
        // set the background back to normal
        project.current.style.backgroundColor = Colors.background;
        // put the opacity back to normal
        project.current.style.opacity = "0.3";
        // hide the description for this project
        description.current.style.display = "none";
        // put the title and description color back to normal
        title.current.style.color = Colors.text;
        description.current.style.color = Colors.text;
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
    const project2Description = (
        <p ref={description2Ref} className="ProjectDescription">
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
    const project4Description = (
        <p ref={description4Ref} className="ProjectDescription">
            Desktop application used by the SARC department at UCF. It saves
            tutors hours of work by automating the process of logging their
            attendance for each session. Created with Python.
        </p>
    );
    const project5Description = (
        <p ref={description5Ref} className="ProjectDescription">
            Text editor with syntax highlighting support for 7 languages.
            Created with Python.
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
    const project3Image = (
        <div className="ProjectImageContainer">
            <img className="ProjectImage" src={Typo} alt="Typo" />
        </div>
    );
    const project4Image = (
        <div className="ProjectImageContainer">
            <img className="ProjectImage" src={AutoGrid} alt="AutoGrid" />
        </div>
    );
    const project5Image = (
        <div className="ProjectImageContainer">
            <img className="ProjectImage" src={Codon} alt="Codon" />
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
            {project1Title}
            {project1Description}
            {project1Image}
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
            {project2Title}
            {project2Description}
            {project2Image}
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
            {project3Title}
            {project3Description}
            {project3Image}
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
            {project4Title}
            {project4Description}
            {project4Image}
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
            {project5Title}
            {project5Description}
            {project5Image}
        </div>
    );
    // variable to store the contents of the project page
    const ProjectPage = (
        <div className="ProjectPage">
            <div className="ProjectPageHeader" ref={containerRef}>
                <h1 className="ProjectTitleText">Projects</h1>
                <div className="TitleBar"></div>
            </div>

            <div className="ProjectContainer">
                {project1}
                {project2}
                {project3}
                {project4}
                {project5}
            </div>
        </div>
    );

    return ProjectPage;
}
