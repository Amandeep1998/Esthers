import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";

import CardMedia from "@mui/material/CardMedia";

import productData from "../data/productData.json";
import { CardContent } from "@mui/material";
import useTheme from "@mui/styles/useTheme";

const useStyles = makeStyles((theme) => ({
  home__header_container: {
    paddingTop: theme.spacing(12),
    height: "35vh",
    width: "80%",
  },
  home__header_content: {
    display: "flex",
    flexDirection: "column",
  },
  home___links: {
    display: "flex",
  },
  home__link: {
    margin: "15px",
  },
  home__products: {
    "&:hover": {
      opacity: 0.5,
    },
  },
  deleteIcon: {
    position: "absolute",
    bottom: 65,
    right: 10,
    borderRadius: "100%",
    backgroundColor: "#fff",
    padding: "4px",
  },
  addIcon: {
    position: "absolute",
    bottom: 65,
    right: 10,
    borderRadius: "100%",
    backgroundColor: "#fff",
    padding: "4px",
  },
  modal__box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    height: 700,
    backgroundColor: "#fff",
    border: "2px solid #000",
    boxShadow: 24,
    padding: "10px",
    overflow: "hidden",
    [theme.breakpoints.down("lg")]: {
      width: "90%",
      height: "95%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div style={{ backgroundColor: "#F1E0CD" }}>
        <Container className={classes.home__header_container}>
          <Grid container spacing={2}>
            <Grid item md={10}>
              <div className={classes.home__header_content}>
                <Typography variant="h6">
                  amandeepsaini_cCzAq
                  <SettingsApplicationsIcon
                    sx={{
                      position: "relative",
                      top: "4px",
                      borderRadius: "90%",
                    }}
                  />
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    width: "130px",
                    fontSize: "10px",
                    marginTop: "10px",
                    backgroundColor: "#3A3A3A",
                  }}
                >
                  New Collection
                </Button>
              </div>
            </Grid>
            <Grid item md={2}>
              <div>
                {" "}
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    fontSize: 50,
                    backgroundColor: "#2D5E54",
                  }}
                >
                  A
                </Avatar>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Container className={classes.home__products_container}>
        <div className={classes.home___links}>
          <div className={classes.home__link}>Posts</div>
          <div className={classes.home__link}>Guides</div>
          <div className={classes.home__link}>Collections</div>
          <div className={classes.home__link}>Drafts</div>
          <div className={classes.home__link}>My Store</div>
        </div>
        <hr></hr>
        <Grid container spacing={2} sx={{ paddingTop: "20px" }}>
          <Grid
            item
            xs={3}
            sm={3}
            md={2}
            lg={1}
            order={{ xs: 2, sm: 2, lg: 1 }}
          >
            <Button
              size="small"
              variant="contained"
              onClick={() => setShow(!show)}
            >
              {show ? <CloseIcon /> : <FilterListIcon />}
              Filter
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            lg={8}
            order={{ xs: 1, sm: 1, lg: 2 }}
          >
            <div
              style={{
                border: "1px solid #DDD",
                height: "35px",
                display: "flex",
                alignItems: "center",
                borderRadius: "2%",
              }}
            >
              <InputBase
                placeholder="Search"
                sx={{ width: "95%", padding: "5px" }}
              />

              <SearchIcon />
            </div>
          </Grid>
          <Grid
            item
            xs={9}
            sm={9}
            md={3}
            lg={3}
            order={{ xs: 3, sm: 3, lg: 3 }}
          >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"newest"}
              label="Age"
              sx={{ width: "95%", height: "35px", margin: "0px 15px" }}
            >
              <MenuItem value={"newest"}>Newest</MenuItem>
              <MenuItem value={"relevant"}>Relevant</MenuItem>
            </Select>
          </Grid>
        </Grid>
        {show ? (
          <div
            className={classes.filter__list}
            style={{
              display: "flex",
              overflow: "auto",
            }}
          >
            <Button
              sx={{ minWidth: "130px", fontSize: "12px" }}
              className={classes.filter__btn}
            >
              All Categories
            </Button>
            <Button
              sx={{ minWidth: "130px", fontSize: "12px" }}
              className={classes.filter__btn}
            >
              Living room
            </Button>
            <Button
              sx={{ minWidth: "130px", fontSize: "12px" }}
              className={classes.filter__btn}
            >
              Kitchen
            </Button>
            <Button
              sx={{ minWidth: "130px", fontSize: "12px" }}
              className={classes.filter__btn}
            >
              Bathroom
            </Button>
            <Button
              sx={{ minWidth: "130px", fontSize: "12px" }}
              className={classes.filter__btn}
            >
              Outdoor
            </Button>
            <Button
              sx={{ minWidth: "130px", fontSize: "12px" }}
              className={classes.filter__btn}
            >
              Bedroom
            </Button>
            <Button
              sx={{ minWidth: "130px", fontSize: "12px" }}
              className={classes.filter__btn}
            >
              Kids
            </Button>
            <Button
              sx={{ minWidth: "130px", fontSize: "12px" }}
              className={classes.filter__btn}
            >
              Decor
            </Button>
            <Button
              sx={{ minWidth: "130px", fontSize: "12px" }}
              className={classes.filter__btn}
            >
              Textiles
            </Button>
            <Button
              sx={{ minWidth: "130px", fontSize: "12px" }}
              className={classes.filter__btn}
            >
              Walls
            </Button>
            <Button
              sx={{ minWidth: "130px", fontSize: "12px" }}
              className={classes.filter__btn}
            >
              Art
            </Button>
            <Button
              sx={{ minWidth: "130px", fontSize: "12px" }}
              className={classes.filter__btn}
            >
              Modern
            </Button>
            <Button
              sx={{ minWidth: "130px", fontSize: "12px" }}
              className={classes.filter__btn}
            >
              Industrial
            </Button>
          </div>
        ) : (
          ""
        )}
        <Grid container spacing={1}>
          <Grid item lg={3} md={4} sm={4} xs={6}>
            <Card
              sx={{
                width: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "10px",
                marginTop: "20px",
              }}
            >
              <Paper
                sx={{
                  backgroundColor: "#F2F4F4",
                  width: "100%",
                  height: "250px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button variant="contained" onClick={handleOpen}>
                  Add Product
                </Button>
              </Paper>
            </Card>
            <Typography
              variant="p"
              component="p"
              sx={{ fontSize: "10px", marginTop: "15px" }}
            >
              Select Products from Catalog
            </Typography>
          </Grid>
          {productData.map((prod) => {
            return (
              <Grid
                key={prod.id}
                lg={3}
                md={4}
                sm={4}
                xs={6}
                className={classes.home__products}
                item
                sx={{
                  width: "225px",
                  marginTop: "20px",
                  position: "relative",
                }}
              >
                <CardMedia
                  component="img"
                  className={classes.media}
                  height="270"
                  image={prod.img}
                  alt="green iguana"
                  sx={{ width: "100%" }}
                ></CardMedia>
                <CardContent>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{ fontSize: "10px" }}
                  >
                    {prod.name}
                  </Typography>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{ fontSize: "10px", color: "#2D5E54" }}
                  >
                    {prod.price} SEK
                  </Typography>
                </CardContent>
                <DeleteIcon className={classes.deleteIcon} />
              </Grid>
            );
          })}
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={classes.modal__box}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Product Catalog
            </Typography>
            <hr></hr>
            <Grid container spacing={2} sx={{ marginTop: "10px" }}>
              <Grid
                item
                xs={2}
                sm={2}
                md={2}
                lg={2}
                order={{ xs: 2, sm: 2, lg: 1, md: 1 }}
              >
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => setShow(!show)}
                >
                  {show ? <CloseIcon /> : <FilterListIcon />}
                  Filter
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={7}
                lg={7}
                order={{ xs: 1, sm: 1, lg: 2, md: 2 }}
              >
                <div
                  style={{
                    border: "1px solid #DDD",
                    height: "35px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "2%",
                  }}
                >
                  <InputBase
                    placeholder="Search"
                    sx={{ width: "95%", padding: "5px" }}
                  />

                  <SearchIcon />
                </div>
              </Grid>
              <Grid
                item
                xs={10}
                sm={10}
                md={3}
                lg={3}
                order={{ xs: 3, sm: 3, lg: 3, md: 3 }}
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={"newest"}
                  label="Age"
                  sx={{ width: "95%", height: "35px", margin: "0px 15px" }}
                >
                  <MenuItem value={"newest"}>Newest</MenuItem>
                  <MenuItem value={"relevant"}>Relevant</MenuItem>
                </Select>
              </Grid>
            </Grid>
            {show ? (
              <div
                className={classes.filter__list}
                style={{
                  display: "flex",
                  overflow: "auto",
                }}
              >
                <Button
                  sx={{ minWidth: "130px", fontSize: "12px" }}
                  className={classes.filter__btn}
                >
                  All Categories
                </Button>
                <Button
                  sx={{ minWidth: "130px", fontSize: "12px" }}
                  className={classes.filter__btn}
                >
                  Living room
                </Button>
                <Button
                  sx={{ minWidth: "130px", fontSize: "12px" }}
                  className={classes.filter__btn}
                >
                  Kitchen
                </Button>
                <Button
                  sx={{ minWidth: "130px", fontSize: "12px" }}
                  className={classes.filter__btn}
                >
                  Bathroom
                </Button>
                <Button
                  sx={{ minWidth: "130px", fontSize: "12px" }}
                  className={classes.filter__btn}
                >
                  Outdoor
                </Button>
                <Button
                  sx={{ minWidth: "130px", fontSize: "12px" }}
                  className={classes.filter__btn}
                >
                  Bedroom
                </Button>
                <Button
                  sx={{ minWidth: "130px", fontSize: "12px" }}
                  className={classes.filter__btn}
                >
                  Kids
                </Button>
                <Button
                  sx={{ minWidth: "130px", fontSize: "12px" }}
                  className={classes.filter__btn}
                >
                  Decor
                </Button>
                <Button
                  sx={{ minWidth: "130px", fontSize: "12px" }}
                  className={classes.filter__btn}
                >
                  Textiles
                </Button>
                <Button
                  sx={{ minWidth: "130px", fontSize: "12px" }}
                  className={classes.filter__btn}
                >
                  Walls
                </Button>
                <Button
                  sx={{ minWidth: "130px", fontSize: "12px" }}
                  className={classes.filter__btn}
                >
                  Art
                </Button>
                <Button
                  sx={{ minWidth: "130px", fontSize: "12px" }}
                  className={classes.filter__btn}
                >
                  Modern
                </Button>
                <Button
                  sx={{ minWidth: "130px", fontSize: "12px" }}
                  className={classes.filter__btn}
                >
                  Industrial
                </Button>
              </div>
            ) : (
              ""
            )}

            <Grid
              container
              spacing={1}
              sx={{
                marginTop: "5px",
                height: "530px",
                overflow: "scroll",

                [theme.breakpoints.down("sm")]: {
                  width: "100%",
                  height: "545px",
                },
              }}
            >
              {productData.map((prod) => {
                return (
                  <Grid
                    xs={6}
                    lg={3}
                    md={4}
                    key={prod.id}
                    className={classes.home__products}
                    item
                    sx={{
                      width: "240px",
                      marginTop: "20px",
                      position: "relative",
                    }}
                  >
                    <CardMedia
                      component="img"
                      className={classes.media}
                      height="270"
                      image={prod.img}
                      alt="green iguana"
                      sx={{ width: "100%" }}
                    ></CardMedia>
                    <CardContent>
                      <Typography
                        variant="p"
                        component="p"
                        sx={{ fontSize: "10px" }}
                      >
                        {prod.name}
                      </Typography>
                      <Typography
                        variant="p"
                        component="p"
                        sx={{ fontSize: "10px" }}
                      >
                        {prod.price} SEK
                      </Typography>
                    </CardContent>
                    <AddIcon className={classes.addIcon} />
                  </Grid>
                );
              })}
            </Grid>
            <div
              style={{
                display: "flex",
                padding: "10px",
                justifyContent: "flex-end",
              }}
            >
              <Button
                sx={{ marginRight: "10px" }}
                variant="contained"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Done
              </Button>
            </div>
          </Box>
        </Modal>
      </Container>
    </>
  );
};

export default Home;
