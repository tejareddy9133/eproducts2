import * as React from "react";
// import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

export default function Productcard({ price, thumbnail, brand }) {
  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">Yosemite National Park</Typography>
        <Typography level="body-sm">April 24 to May 02, 2021</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <Card minHeight="120px" maxHeight="200px">
        <img src={thumbnail} srcSet={thumbnail} loading="lazy" alt="" />
      </Card>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {price}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
        >
          {brand}
        </Button>
      </CardContent>
    </Card>
  );
}
