import classnames from "classnames";
import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation
} from "react-router-dom";

import viteLogo from "/vite.svg";

import styles from "./App.module.less";
import mobxLogo from "./assets/mobx.png";
import reactLogo from "./assets/react.svg";
import HelloWorld from "./components/HelloWorld";

const Home = React.lazy(() => import("./views/Home"));
const About = React.lazy(() => import("./views/About"));

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <div className={classnames([styles["page-wrapper"]])}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className={styles["logo"]} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className={classnames([styles["logo"], styles["react"]])}
            alt="React logo"
          />
        </a>
        <a
          href="https://mobx.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={mobxLogo}
            className={classnames([styles["logo"], styles["mobx"]])}
            alt="Mobx logo"
          />
        </a>
      </div>
      <HelloWorld msg="Vite + React + Mobx" />
      <div className={classnames([styles["router-wrapper"]])}>
        <p>
          <strong>Current route path:</strong> {location.pathname}
          {location.search}
        </p>
        <nav>
          <Link
            to="/"
            className={classnames({
              [styles["link-active"]]: location.pathname === "/"
            })}
          >
            Go to Home
          </Link>
          <Link
            to="/about"
            className={classnames({
              [styles["link-active"]]: location.pathname === "/about"
            })}
          >
            Go to About
          </Link>
        </nav>

        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </React.Suspense>
      </div>
    </div>
  );
};

export default App;
