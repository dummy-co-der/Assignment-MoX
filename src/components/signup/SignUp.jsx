import React, { useRef, useState } from "react";
import styles from "./SignUp.module.scss";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Modal, TextField } from "@mui/material";

// List of allowed email domains
const allowedDomains = ["gmail.com", "outlook.com", "yahoo.in", "ymail.com"];

// Function to check if the email domain is valid
const isEmailDomainValid = (email) => {
  const emailParts = email.split("@");
  if (emailParts.length === 2) {
    const domain = emailParts[1].toLowerCase();
    return allowedDomains.includes(domain);
  }
  return false;
};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  // Event handler for email input change
  const handleChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    // Check if the email domain is valid and set the state accordingly
    setIsInvalid(!isEmailDomainValid(value));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    console.log("Modal opened");
    setIsModalOpen(true);
  };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.signup}>
      <div className={styles.signupsub}>
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
        <div className={styles.signupacc}>
          <a href="/">
            <ArrowBackIcon
              className={styles.arrow}
              style={{ marginLeft: "0.5rem" }}
            />
          </a>
          <div className={styles.top_img}>
            <img src="/splash.png" alt="logo svg" />
          </div>
          <div className={styles.signup_content}>
            <h2 style={{ marginTop: "0rem" }}> Sign up with Email </h2>
            <p>Enter your details and dive into a realm of ancient wisdom!💫</p>
            <div style={{ marginTop: "1rem" }}>
              <span
                className={styles.form_heading}
                style={{ marginTop: "1rem" }}
              >
                Your name
              </span>
              <TextField
                id="standard-basic"
                style={{ width: "100%" }}
                variant="standard"
                type="name"
              />
              <span
                className={styles.form_heading}
                style={{ marginTop: "1rem" }}
              >
                Your email
              </span>

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
              {isInvalid && (
                <span
                  style={{
                    color: "#d32f2f",
                    fontWeight: "400",
                    letterSpacing: "0.03em",
                    fontSize: "0.75em",
                    display: "flex",
                    justifyContent: "right",
                  }}
                >
                  Invalid email address
                </span>
              )}

              <span
                className={styles.form_heading}
                style={{ marginTop: "1rem" }}
              >
                Password
              </span>
              <TextField
                id="standard-basic"
                style={{ width: "100%" }}
                variant="standard"
                type="password"
              />
              <span
                className={styles.form_heading}
                style={{ marginTop: "1rem" }}
              >
                Confirm Password
              </span>
              <TextField
                id="standard-basic"
                style={{ width: "100%" }}
                variant="standard"
                type="password"
              />
            </div>
            {/* <Link to={"/login"} style={{textDecoration:"none"}}> */}
            <Button
              style={{
                color: "#69235b",
                backgroundColor: "#f5c75f",
                textTransform: "none",
                marginTop: "4rem",
                width: "100%",
              }}
              onClick={showModal}
            >
              Create an account
            </Button>
          </div>
        </div>
        <Modal className={styles.modals} open={isModalOpen}>
          <div className={styles.modals_content}>
            <span className={styles.close} onClick={handleCancel}>
              &times;
            </span>
            <h3> Account Created Successfully </h3>
            <p>
              {" "}
              Go Back To Login Page And Input Your Credentials To Start
              Chatting.{" "}
            </p>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default SignUp;
