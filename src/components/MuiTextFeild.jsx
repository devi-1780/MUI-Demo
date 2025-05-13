import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

function MuiTextFeild() {
  let [input, setInput] = useState("");
  let [password, setPassword] = useState("");
  return (
    <Stack direction={"column"} spacing={2}>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          onChange={(e) => setInput(e.target.value)}
          label="Form Input"
          required
          error={input === ""}
        />
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField label="small secondary" color="secondary" size="samll" />
        <TextField
          label="samll secondary"
          color="secondary"
          size="samll"
          variant="filled"
        />
        <TextField
          label="samll secondary"
          color="secondary"
          size="samll"
          variant="standard"
        />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          label="password"
          required
          helperText={
            password === ""
              ? "reiquired"
              : "Do not share your passowrd to anyone"
          }
        />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Amount"
          InputProps={{ startAdornment: <InputAdornment>$</InputAdornment> }}
        />
        <TextField
          label="Weight"
          InputProps={{ endAdornment: <InputAdornment>kg</InputAdornment> }}
        />
      </Stack>
    </Stack>
  );
}
export default MuiTextFeild;
