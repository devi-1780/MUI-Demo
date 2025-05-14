import { Link, Route, Routes } from "react-router";
import "./App.css";

import MuiTypography from "./components/MuiTypography";
import { Button, Stack } from "@mui/material";
import MuiButton from "./components/MuiButton";
import MuiTextFeild from "./components/MuiTextFeild";
import MuiSelect from "./components/MuiSelect";
import MuiRadioButton from "./components/MuiRadioButton";

function App() {
  return (
    <div className="App">
      <nav>
        <Stack spacing={4} direction={"row"}>
          <Link to="/">
            <Button variant="contained">Mui-Typography</Button>
          </Link>
          <Link to="buttonComponent">
            <Button variant="contained">Mui-Button</Button>
          </Link>
          <Link to="textFieldComponent">
            <Button variant="contained">Mui-TextFeild</Button>
          </Link>
          <Link to="selectComponent">
            <Button variant="contained">Mui-Select</Button>
          </Link>
          <Link to="radioComponent">
            <Button variant="contained">Mui-Radio</Button>
          </Link>
        </Stack>
      </nav>
      <Routes>
        <Route path="/" element={<MuiTypography />} />
        <Route path="/buttonComponent" element={<MuiButton />} />
        <Route path="/textFieldComponent" element={<MuiTextFeild />} />
        <Route path="/selectComponent" element={<MuiSelect />} />
        <Route path="/radioComponent" element={<MuiRadioButton />} />
      </Routes>
    </div>
  );
}

export default App;
