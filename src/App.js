import React, {
    useState,
    useLayoutEffect,
    useEffect,
    useRef,
    createContext,
} from "react";
import "./styles/App.css";
import Project from "./components/Projects";
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";

// app context to access states from any component
export const AppContext = createContext(null);

function App() {
    // state to track window width
    const [width, setWindowWidth] = useState(window.innerWidth);
    const [page, setPage] = useState(0);
    // state to track the projects container
    const [projectContainer, setProjectContainer] = useState(null);
    // state to track the homepage container
    const [homePageContainer, setHomePageContainer] = useState(null);
    const PassedStates = {
        page,
        setPage,
        width,
        projectContainer,
        setProjectContainer,
        homePageContainer,
        setHomePageContainer,
    };
    // use effect to detect window size changes
    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    // function to set the current window width state
    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    const divider = <div className="HorLine"></div>;

    return (
        <AppContext.Provider value={PassedStates}>
            <div className="App">
                <Menu />
                {divider}
                {page === 0 && <HomePage />}
                {page === 1 && <Project />}
                {page === 2 && <ContactPage />}
            </div>
        </AppContext.Provider>
    );
}

export default App;
