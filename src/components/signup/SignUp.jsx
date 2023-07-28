import React from "react";
import styles from "./SignUp.module.scss";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, TextField } from "@mui/material";

const SignUp = () => {
  return (
    <div className={styles.signup}>
      <div className={styles.signupsub}>
        <div className={styles.anim}>
          <motion.div
            animate={{ y: ["0%", "5%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          >
            <img src="/splash.png" alt="logo svg" height="500vh" width="500vh" />
          </motion.div>
        </div>
        <div className={styles.signupacc}>
          <a href="/">
            <ArrowBackIcon className={styles.arrow} style={{ marginLeft: "0.5rem" }} />
          </a>
          <div className={styles.top_img}>
            <img src="/splash.png" alt="logo svg"/>
          </div>
          <div className={styles.signup_content}>
            <h2 style={{ marginTop: "0rem" }}> Sign up with Email </h2>
            <p>
              Enter your details and drive into a realm of ancient wisdom!💫
            </p>
            <div style={{marginTop:"1rem"}}>
              <span className={styles.form_heading} style={{ marginTop: "1rem" }}> Your name </span>
              <TextField id="standard-basic" style={{ width: "100%" }} variant="standard" type="name" />
              <span className={styles.form_heading} style={{ marginTop: "1rem" }}> Your email </span>
              <TextField id="standard-basic" style={{ width: "100%" }} variant="standard" type="email" />
              <span className={styles.form_heading} style={{ marginTop: "1rem" }}> Password </span>
              <TextField id="standard-basic" style={{ width: "100%" }} variant="standard" type="password" />
              <span className={styles.form_heading} style={{ marginTop: "1rem" }}> Confirm Password </span>
              <TextField id="standard-basic" style={{ width: "100%" }} variant="standard" type="password" />
            </div>
            <Button style={{ color: "#69235b", backgroundColor: "#f5c75f", textTransform: "none", marginTop: "4rem" }}>
              Create an account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
