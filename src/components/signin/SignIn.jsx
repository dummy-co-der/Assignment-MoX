import React from "react";
import styles from "./SignIn.module.scss";
import { motion } from "framer-motion";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className={styles.signin}>
      <div className={styles.signinsub}>
        <div className={styles.anim}>
          <motion.div
            animate={{ y: ["0%", "5%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          >
            <img src="/splash.png" alt="logo svg" height="450vh" width="430vh" />
          </motion.div>
        </div>

        <div className={styles.signinacc}>
          {/* Image and Information Section */}
          <img src="/girl.jpg" alt="namaste" />
          <div className={styles.info}>
            <h2 className={styles.login_heading}>
              Discover the <br /> timeless wisdom of <br />
              <span className={styles.vedas}>the Vedas.</span>
            </h2>
            <p style={{ marginTop: "0", marginBottom: "1rem", color: "white" }}>
              Sign up and
              <span className={styles.vedas}> journey through ancient knowledge with Arya ✨ </span>
            </p>

            {/* Social Icons Section */}
            <div className={styles.socials}>
            <FacebookRoundedIcon style={{ marginRight: "1rem", color:"white", borderRadius:"50%", border:"1px solid white", padding:"3px" }}/>
              <GoogleIcon style={{ marginRight: "1rem", color:"white", borderRadius:"50%", border:"1px solid white", padding:"3px" }} />
              <AppleIcon style={{ marginRight: "1rem", color: "white", borderRadius:"50%", border:"1px solid white", padding:"3px"}} />
            </div>

            {/* "OR" Section */}
            <div className={styles.or}>
              {/* Horizontal Line */}
              <p style={{ backgroundColor: "white", height: "1px", width: "42%" }} />
              <span
                style={{ color: "white", marginTop: "0.5rem", marginLeft: "0.5rem", marginRight: "0.5rem" }} >
                OR
              </span>
              {/* Horizontal Line */}
              <p style={{ backgroundColor: "white", height: "1px", width: "42%" }} />
            </div>

            {/* "Sign up with mail" Button */}
            <Button style={{ color: "#69235b", backgroundColor: "#f5c75f", textTransform:"none" }}>
            <Link to={"/signup"} style={{textDecoration:"none"}}>
              Sign up with mail
              </Link>
            </Button>

            {/* Existing Account Section */}
            <div style={{ color: "white", textAlign: "center", padding:"1.5rem" }}>
              <h4 style={{ marginTop: "0rem" }}>
                Existing account? <Link to={"/login"} style={{textDecoration:"none"}} className={styles.vedas}> Log in </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;