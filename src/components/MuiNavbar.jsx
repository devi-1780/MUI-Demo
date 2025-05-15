import { AppBar, Box, Toolbar } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
function MuiNavbar() {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <CatchingPokemonIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default MuiNavbar;
