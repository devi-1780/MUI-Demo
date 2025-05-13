import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

function MuiButton() {
  let [format, setFormat] = useState(null);
  const handleToggleButton = (event, updatedFormat) => {
    setFormat(updatedFormat);
    console.log("selected format", updatedFormat);
  };
  return (
    <div>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text">text</Button>
          <Button variant="contained">contained</Button>
          <Button variant="outlined">outlined</Button>
        </Stack>
        <Stack spacing={2} direction={"row"}>
          <Button variant="contained" color="primary">
            primary
          </Button>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
          <Button variant="contained" color="error">
            error
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="warning">
            warning
          </Button>
          <Button variant="contained" color="success">
            success
          </Button>
        </Stack>
        <Stack spacing={2} direction={"row"}>
          <Button variant="contained" size="small">
            small
          </Button>
          <Button variant="contained" size="medium">
            medium
          </Button>
          <Button variant="contained" size="large">
            large
          </Button>
        </Stack>
        <Stack spacing={2} direction={"row"}>
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            disableElevation
            onClick={() => alert("clicked")}
          >
            send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} disableRipple>
            send
          </Button>
          <IconButton color="primary" size="small">
            <SendIcon />
          </IconButton>
        </Stack>
        <Stack direction={"row"}>
          <ButtonGroup
            color="secondary"
            size="small"
            orientation="vertical"
            variant="contained"
          >
            <Button onClick={() => alert("left clicked")}>Left</Button>
            <Button onClick={() => alert("center clicked")}>Center</Button>
            <Button onClick={() => alert("right clicked")}>Right</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction={"row"}>
          <ToggleButtonGroup
            aria-label="text-formating"
            orientation="vertical"
            onChange={handleToggleButton}
            value={format}
            exclusive
            color="success"
            size="small"
          >
            <ToggleButton value={"bold"} aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value={"italic"} aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value={"underline"} aria-label="underline">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </div>
  );
}
export default MuiButton;
