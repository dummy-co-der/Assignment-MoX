import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import styles from "./Splash.module.scss";

const Splash = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "95vh",
            background: "white",
          }}
        >
          <img alt="Preloader" src={"/splash.png"} style={{ height: "50%" }} />
          <Typewriter
            options={{
              strings: ["Back to Vedas 🕉️"],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 20,
              cursor: "_",
              wrapperClassName: styles["typewriter-wrapper"],
              cursorClassName: styles["typewriter-cursor"],
              stringClassName: styles["typewriter-string"],
            }}
          />
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Splash;
