import React from "react";
import { Card, Typography, Stack } from "@mui/material";
const Home = () => {
  return (
    <>
      <Card size="lg">
        <img
          src="https://plus.unsplash.com/premium_photo-1669863284071-06345764d4c2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
          alt=""
          style={{ width: "100%", height: "400px" }}
        />
      </Card>

      <Stack
        spacing={1}
        direction="row"
        flexWrap="wrap"
        justifyContent="space-around"
        useFlexGap
      >
        <Card variant="outlined" sx={{ maxWidth: 400 }}>
          <Typography level="h1">National Parks</Typography>
          <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
            Yosemite National Park
          </Typography>
          <Typography>
            Yosemite National Park is a national park spanning 747,956 acres
            (1,169.4 sq mi; 3,025.2 km2) in the western Sierra Nevada of Central
            California.
          </Typography>
        </Card>
        <Card variant="outlined" sx={{ maxWidth: 400 }}>
          <Typography level="h1">National Parks</Typography>
          <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
            Yosemite National Park
          </Typography>
          <Typography>
            Yosemite National Park is a national park spanning 747,956 acres
            (1,169.4 sq mi; 3,025.2 km2) in the western Sierra Nevada of Central
            California.
          </Typography>
        </Card>
        <Card variant="outlined" sx={{ maxWidth: 400 }}>
          <Typography level="h1">National Parks</Typography>
          <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
            Yosemite National Park
          </Typography>
          <Typography>
            Yosemite National Park is a national park spanning 747,956 acres
            (1,169.4 sq mi; 3,025.2 km2) in the western Sierra Nevada of Central
            California.
          </Typography>
        </Card>
        <Card variant="outlined" sx={{ maxWidth: 400 }}>
          <Typography level="h1">National Parks</Typography>
          <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
            Yosemite National Park
          </Typography>
          <Typography>
            Yosemite National Park is a national park spanning 747,956 acres
            (1,169.4 sq mi; 3,025.2 km2) in the western Sierra Nevada of Central
            California.
          </Typography>
        </Card>
      </Stack>
    </>
  );
};

export default Home;
