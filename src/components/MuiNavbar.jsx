import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
function MuiNavbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" size="large" color="inherit" label="logo">
          {" "}
          <CatchingPokemonIcon color="white" />
        </IconButton>
        <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
          Pokemon app
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default MuiNavbar;
