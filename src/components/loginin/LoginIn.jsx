import React from "react";
import { motion } from "framer-motion";
import styles from "./LoginIn.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Button, TextField } from "@mui/material";

const LoginIn = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginsub}>
        <div className={styles.anim}>
          <motion.div
            animate={{ y: ["0%", "5%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          >
            <img
              src="/splash.png"
              alt="logo svg"
              height="500vh"
              width="500vh"
            />
          </motion.div>
        </div>
        <div className={styles.loginacc}>
          <a href="/"> <ArrowBackIcon className={styles.arrow} style={{marginLeft:"0.5rem"}}/></a>
          <div className={styles.login_content}>
            <h2 style={{ marginTop: "4rem" }}> Log in to Mokx </h2>
            <p>
              Welcome back! Sign in using your social account or email to
              continue us
            </p>
            <div className={styles.socials}>
              <FacebookRoundedIcon style={{ marginRight: "1rem", color:"darkblue", borderRadius:"50%", border:"1px solid black", padding:"3px" }}/>
              <GoogleIcon style={{ marginRight: "1rem", color:"#69235b", borderRadius:"50%", border:"1px solid black", padding:"3px" }} />
              <AppleIcon style={{ marginRight: "1rem", color: "black", borderRadius:"50%", border:"1px solid black", padding:"3px"}} />
            </div>
            <div className={styles.or}>
              <p style={{ backgroundColor: "gray", height: "0.5px", width: "42%" }} />
              <span
                style={{marginTop: "0.5rem", marginLeft: "0.5rem", marginRight: "0.5rem" }} >
                OR
              </span>
              <p style={{ backgroundColor: "gray",height: "0.5px", width: "42%" }} />
            </div>
            <div className={styles.form_group}>
              <span className={styles.form_heading}> Your email </span>
                <TextField id="standard-basic" style={{width:"100%"}} variant="standard" type="mail"/>
              <span className={styles.form_heading} style={{marginTop:"1rem"}}> Password </span>
                <TextField id="standard-basic" style={{width:"100%"}} variant="standard" type="password" />
            </div>
            <Button style={{ color: "#69235b", backgroundColor: "#f5c75f", textTransform:"none", marginTop:"4rem" }}>
              Login
            </Button>
            <span style={{color:"#f5c75f", marginTop:"1rem"}}> Forgot Password? </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginIn;
