import {
  Box,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { useState } from "react";

function MuiCheckbox() {
  let [skills, setSkills] = useState([]);
  let [isAccept, setIsAccept] = useState(false);
  console.log(skills);
  function handleChange(e) {
    console.log(e.target.checked);
    setIsAccept(e.target.checked);
  }
  function handleSkillsChange(e) {
    let index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      let filter = skills.filter((skill) => skill !== e.target.value);
      setSkills(filter);
    }
  }
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={isAccept} onChange={handleChange} />}
        />
      </Box>
      <FormControl>
        <FormLabel>Skills</FormLabel>
        <FormControlLabel
          label="HTML"
          control={
            <Checkbox
              checked={skills.includes("html")}
              onChange={handleSkillsChange}
            />
          }
          value={"html"}
        />
        <FormControlLabel
          label="CSS"
          control={
            <Checkbox
              checked={skills.includes("css")}
              onChange={handleSkillsChange}
            />
          }
          value={"css"}
        />
        <FormControlLabel
          label="JavaScript"
          control={
            <Checkbox
              checked={skills.includes("javascript")}
              onChange={handleSkillsChange}
            />
          }
          value={"javascript"}
        />
        <FormControlLabel
          label="React js"
          control={
            <Checkbox
              checked={skills.includes("react js")}
              onChange={handleSkillsChange}
            />
          }
          value={"react js"}
        />
      </FormControl>
    </Box>
  );
}
export default MuiCheckbox;
