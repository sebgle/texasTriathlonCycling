// Cover.js
import React from "react";
import Box from "@mui/material/Box";

const Cover = ({
  backgroundType = "image",
  backgroundSrc,
  backgroundColor = "#000",
  children,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor:
          backgroundType === "color" ? backgroundColor : "transparent",
      }}
    >
      {/* Render Image Background */}
      {backgroundType === "image" && backgroundSrc && (
        <Box
          component="img"
          src={backgroundSrc}
          alt="Cover Background"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
      )}

      {/* Render Video Background */}
      {backgroundType === "video" && backgroundSrc && (
        <Box
          component="video"
          src={backgroundSrc}
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
      )}

      {/* Overlay Content */}
      <Box
        sx={{
          position: "relative",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Cover;
