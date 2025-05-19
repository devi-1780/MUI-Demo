import { Avatar, Chip, Stack } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";
export default function MuiChip() {
  let [chips, setChips] = useState(["chip1", "chip2", "chip3"]);
  function handleDelete(delChip) {
    setChips((chips) => chips.filter((chip) => chip !== delChip));
  }
  return (
    <Stack direction={"row"} spacing={4} p={"20px"}>
      <Chip
        label="chip"
        color="primary"
        size="large"
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>
        }
      />
      <Chip
        avatar={<Avatar>V</Avatar>}
        label="chip"
        variant="outlined"
        color="secondary"
        size="large"
      />
      <Chip
        label="click"
        color="success"
        onClick={() => alert("button clicked")}
      />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("button clicked")}
        onDelete={() => alert("button delete clicked")}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
}
