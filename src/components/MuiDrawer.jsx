import { Box, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
export default function MuiDrawer() {
  let [isPanelOpen, setIsPanelOpen] = useState(false);
  function handleDrawerOpen() {
    setIsPanelOpen(true);
  }
  return (
    <>
      <IconButton color="inherit" edge="start" size="large">
        <MenuIcon onClick={handleDrawerOpen} />
      </IconButton>
      <Drawer
        anchor="left"
        open={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
      >
        <Box p={2} width={"250px"} textAlign={"center"} role="presentation">
          <Typography variant="h6" component={"div"}>
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
