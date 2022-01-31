import { Container } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import CopyrightIcon from "@mui/icons-material/Copyright";

const useStyles = makeStyles((theme) => ({
  footer__container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media screen and (max-width: 700px)": {
      flexDirection: "column",
    },
  },
  footer__left: {
    display: "flex",
    alignItems: "center",
  },
  footer__link: {
    margin: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div style={{ color: "#fff", backgroundColor: "#2D5E54" }}>
      <Container sx={{}}>
        <div className={classes.footer__container}>
          <div className={classes.footer__left}>
            <div className={classes.footer__link}>
              <span>Help</span>
            </div>
            <div className={classes.footer__link}>
              <span>Feedback</span>
            </div>
            <div className={classes.footer__link}>
              <span>Carrers</span>
            </div>
            <div className={classes.footer__link}>
              <span>Business enquires</span>
            </div>
          </div>
          <div className={classes.footer__right}>
            <p>
              Esthers Scandinavia AB{" "}
              <CopyrightIcon sx={{ position: "relative", top: 5 }} />
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
