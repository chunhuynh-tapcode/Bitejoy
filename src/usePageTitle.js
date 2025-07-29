import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function usePageTitle() {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        switch (path) {
            case "/contact":
                document.title = "Bitejoy | Contact";
                break;
            case "/menu":
                document.title = "Bitejoy | Menu";
                break;
            default:
                document.title = "Bitejoy";
        }
    }, [location]);
}

export default usePageTitle;