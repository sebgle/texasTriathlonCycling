import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Banner = ({ text = "FAQ", gradientColors = ["#D44600", "#D83AA3"] }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "150px",
        background: `linear-gradient(90deg, ${gradientColors[0]}, ${gradientColors[1]})`,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "24px",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {text}
      </Typography>
    </Box>
  );
};

export default Banner;
