import React, { useState } from "react";
import styles from "./SignUp.module.scss";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, TextField } from "@mui/material";

// List of allowed email domains
const allowedDomains = ["gmail.com", "outlook.com", "yahoo.in", "ymail.com"];

// Function to check if the email domain is valid
const isEmailDomainValid = (email) => {
  const emailParts = email.split('@');
  if (emailParts.length === 2) {
    const domain = emailParts[1].toLowerCase();
    return allowedDomains.includes(domain);
  }
  return false;
};

const SignUp = () => {
  // State to manage the email input field and email validation
  const [email, setEmail] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  // Event handler for email input change
  const handleChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    // Check if the email domain is valid and set the state accordingly
    setIsInvalid(!isEmailDomainValid(value));
  };

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
              Enter your details and dive into a realm of ancient wisdom!💫
            </p>
            <div style={{marginTop:"1rem"}}>
              <span className={styles.form_heading} style={{ marginTop: "1rem" }}> Your name </span>
              <TextField id="standard-basic" style={{ width: "100%" }} variant="standard" type="name" />
              <span className={styles.form_heading} style={{ marginTop: "1rem" }}> Your email </span>

              {/* Email input field */}
              <TextField
                id="standard-basic"
                style={{ width: "100%" }}
                variant="standard"
                type="email"
                value={email}
                onChange={handleChange}
                error={isInvalid} // Set the error state of the TextField
              />

              {/* Error message for invalid email */}
              {isInvalid && <span style={{color:"#d32f2f", fontWeight:"400", letterSpacing:"0.03em", fontSize:"0.75em", display:"flex", justifyContent:"right"}}> Invalid email address </span> }

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
