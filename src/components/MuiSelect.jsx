import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

function MuiSelect() {
  let [country, setCountry] = useState("");
  function handleChange(e) {
    const val = e.target.value;
    console.log({ country: val });
    setCountry(val);
  }
  return (
    <Box width="250px">
      <TextField
        value={country}
        label="Select Country"
        fullWidth
        select
        size="small"
        color="secondary"
        error={!country}
        onChange={handleChange}
        helperText="Please Select your country"
      >
        <MenuItem value={"IN"}>India</MenuItem>
        <MenuItem value={"US"}>USA</MenuItem>
        <MenuItem value={"AU"}>Australia</MenuItem>
      </TextField>
    </Box>
  );
}
export default MuiSelect;
