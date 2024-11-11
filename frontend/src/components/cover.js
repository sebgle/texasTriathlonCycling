// Cover.js
import React from "react";
import Box from "@mui/material/Box";

const Cover = ({ backgroundType, backgroundSrc, children }) => {
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
        backgroundColor: "#000",
      }}
    >
      {backgroundType === "image" && (
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
      {backgroundType === "video" && (
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
      {/* Overlay content */}
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
