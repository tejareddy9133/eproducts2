import React from "react";
import Products from "../Assets/Productsdata";
import { Stack } from "@mui/material";
import Productcard from "../components/Productcard";
const Productspage = () => {
  return (
    <div>
      <h1>Prducts</h1>
      <Stack
        spacing={1}
        direction="row"
        flexWrap="wrap"
        justifyContent="space-around"
        useFlexGap
      >
        {Products.map((ele, ind) => (
          <Productcard {...ele} />
        ))}
      </Stack>
    </div>
  );
};

export default Productspage;
