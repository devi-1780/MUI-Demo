import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

function MuiRadioButton() {
  let [value, setValue] = useState("");
  function handleChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }
  return (
    <Box>
      <FormControl error={!value}>
        <FormLabel id="job-experiance-group">Years of experiance</FormLabel>
        <RadioGroup
          name="job-experiance-group"
          aria-labelledby="job-experiance-group-label"
          row
          onChange={handleChange}
          value={value}
        >
          <FormControlLabel
            control={<Radio size="medium" color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio />} label="2-4" value="2-4" />
          <FormControlLabel control={<Radio />} label="4-6" value="4-6" />
        </RadioGroup>
        <FormHelperText>Invalid selection</FormHelperText>
      </FormControl>
    </Box>
  );
}
export default MuiRadioButton;
