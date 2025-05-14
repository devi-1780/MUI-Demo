import React from "react";
import { Box, Grid, Container } from "@mui/material";

function MuiGrid() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" color="white" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" color="white" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" color="white" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" color="white" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MuiGrid;
