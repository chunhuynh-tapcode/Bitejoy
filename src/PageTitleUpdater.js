import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function PageTitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Bitejoy | Homepage";
        break;
      case "/Menu":
        document.title = "Bitejoy | Menu";
        break;
      case "/Contact":
        document.title = "Bitejoy | Contact";
        break;
      case "/About":
        document.title = "Bitejoy | About";
        break;
      case "/Blog":
        document.title = "Bitejoy | Blog";
        break;
      default:
        if (location.pathname.startsWith("/blog/")) {
          document.title = "Bitejoy | Blog Detail";
        } else {
          document.title = "Bitejoy";
        }
        break;
    }
  }, [location.pathname]);

  return null;
}

export default PageTitleUpdater;
