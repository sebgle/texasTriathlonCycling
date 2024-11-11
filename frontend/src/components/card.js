import React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Card = ({ imageSrc, title, description, buttonText }) => {
  return (
    <MuiCard sx={{ maxWidth: 345, borderRadius: 4, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="280"
        image={imageSrc}
        alt="Placeholder image"
        sx={{ borderRadius: "16px 16px 0 0" }}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" component="div" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginY: 1 }}>
          {description}
        </Typography>
        <Button
          variant="contained"
          color="warning"
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            paddingX: 4,
            paddingY: 1,
          }}
        >
          {buttonText}
        </Button>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
