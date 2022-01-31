import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";

const Explore = () => {
  const [value, setValue] = React.useState("2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container sx={{ paddingTop: "80px", marginBottom: "50px" }}>
        <Grid container>
          <Grid item lg={8} md={8}>
            <Box
              component="img"
              mb={2}
              sx={{
                height: "600px",
                width: "95%",
                "@media screen and (max-width: 600px)": {
                  width: "100%",
                },
              }}
              alt="The house from the offer."
              src="/assets/pic1.jpeg"
            />

            <Box
              component="img"
              sx={{
                height: "600px",
                width: "95%",
              }}
              alt="The house from the offer."
              src="/assets/pic1.jpeg"
            />
          </Grid>
          <Grid item lg={4} md={4}>
            <Typography sx={{ marginBottom: "6px" }} variant="h5">
              Inspiration from Meli Meli
            </Typography>
            <Typography sx={{}} variant="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <Box
                component="div"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Avatar sx={{ marginRight: "5px" }}>E</Avatar>
                <Typography variant="span">Esthers</Typography>
              </Box>
              <Box component="div" m={2}>
                <ShareIcon sx={{ mr: 2 }} />
                <FavoriteBorderIcon sx={{ mr: 2 }} />
                <BookmarkBorderIcon />
              </Box>
            </Box>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab sx={{ width: "50%" }} label="Items" value="1" />
                    <Tab sx={{ width: "50%" }} label="Comments" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">Items</TabPanel>
                <TabPanel value="2">
                  <Box
                    component="div"
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Button variant="contained">Write Comment</Button>
                    <Paper
                      sx={{ width: "100%", height: "auto", mt: 3, p: 2 }}
                      elevation={3}
                    >
                      <Box
                        component="div"
                        sx={{ fontSize: "15px", display: "flex" }}
                      >
                        <Avatar
                          sx={{ marginRight: "5px", width: 30, height: 30 }}
                        >
                          A
                        </Avatar>
                        <Typography variant="span">Username</Typography>
                        <Typography sx={{ marginLeft: "auto" }} variant="span">
                          5d ago
                        </Typography>
                      </Box>
                      <Typography sx={{ pl: 5 }} variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Typography>
                    </Paper>
                  </Box>
                </TabPanel>
              </TabContext>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Explore;
