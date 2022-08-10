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
    const [touchScreen, setTouchScreen] = useState(false);
    const PassedStates = {
        page,
        setPage,
        width,
        touchScreen,
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

    useEffect(() => {
        var isTouch = window.matchMedia("(pointer: coarse)").matches;
        var isMouse = window.matchMedia("(pointer: fine)").matches;

        if (isTouch || !isMouse) {
            setTouchScreen(true);
        }
    }, []);

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
