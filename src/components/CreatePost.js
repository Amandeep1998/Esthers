import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Box,
  Divider,
  InputBase,
  TextareaAutosize,
  Paper,
  Typography,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

import { Select } from "antd";
const { Option } = Select;
const children = [];
let arr = ["Living room", "Kitchen", "Bathroom", "Bedroom"];
for (let i = 0; i < arr.length; i++) {
  children.push(<Option key={arr[i]}>{arr[i]}</Option>);
}

const CreatePost = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <Container
        sx={{
          paddingTop: "80px",
          marginBottom: "20px",
          minHeight: "100vh",
          width: "50%",
          "@media screen and (max-width: 1100px)": {
            width: "80%",
          },
          "@media screen and (max-width: 900px)": {
            width: "100%",
          },
        }}
      >
        <Box component="div" sx={{ display: "flex" }}>
          <Button variant="text">Create a Post</Button>
          <Button variant="text">Create a Guide</Button>
        </Box>
        <Divider />
        <InputBase fullWidth placeholder="Write a Title for your Post..." />
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Add text to your post"
          minRows={4}
          style={{
            width: "100%",
            height: "20%",
            border: "none",
            outline: "none",
          }}
        />
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Please select"
          defaultValue={["Living room"]}
        >
          {children}
        </Select>
        <input
          accept="image/*"
          type="file"
          id="select-image"
          style={{ display: "none" }}
          onChange={(e) => setSelectedImage(e.target.files[0])}
        />
        <Box
          mt={2}
          component="img"
          sx={{
            height: "600px",
            width: "100%",
            "@media screen and (max-width: 1000px)": {
              height: "40%",
            },
          }}
          alt="Some image"
          src={imageUrl ? imageUrl : "/assets/pic3.jpeg"}
        />

        <Box
          component="div"
          sx={{ height: 200, padding: "10px", border: "1px solid #FBFBFB" }}
        >
          <label htmlFor="select-image">
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100%",
                backgroundColor: "#F2F4F4",
                cursor: "pointer",
              }}
            >
              <CameraAltIcon />

              <Typography variant="span">Upload your photo</Typography>
            </Paper>
          </label>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained">Save as Draft</Button>
          <Button sx={{ ml: 2 }} variant="contained">
            Publish
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default CreatePost;
