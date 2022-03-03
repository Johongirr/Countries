import React from "react";
import { CircularProgress, Box } from "@mui/material/";

function Loader() {
  return (
    <Box display="flex" justifyContent="center" mt={8}>
      <CircularProgress style={{ width: "70px", height: "70px" }} />
    </Box>
  );
}

export default Loader;
