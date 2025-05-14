import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";
const skills = ["HTML", "CSS", "Javascript", "React"];
const skillOptions = skills.map((skill, index) => ({
  id: index + 1,
  skill: skill,
}));
function MuiAutoComplete() {
  let [value, setValue] = useState(null);
  let [skill, setSkill] = useState(null);
  console.log({ skill });
  return (
    <Stack spacing={2} width={"250px"}>
      <Autocomplete
        options={skills}
        value={value}
        onChange={(e, newVal) => setValue(newVal)}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        freeSolo
      />
      <Autocomplete
        options={skillOptions}
        getOptionLabel={(option) => option.skill}
        value={skill}
        onChange={(e, newVal) => setSkill(newVal)}
        renderInput={(params) => <TextField {...params} label="Skills" />}
      />
    </Stack>
  );
}
export default MuiAutoComplete;
