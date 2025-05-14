import { Box, FormControl, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

function MuiSwitch() {
  let [checked, setChecked] = useState(false);
  console.log({ checked });
  function handleChecked(e) {
    setChecked(e.target.checked);
  }
  return (
    <Box>
      <FormControl>
        <FormControlLabel
          label="Dark mode"
          control={
            <Switch
              checked={checked}
              onChange={handleChecked}
              color="success"
            />
          }
        />
      </FormControl>
    </Box>
  );
}
export default MuiSwitch;
