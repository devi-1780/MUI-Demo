import { Link, Route, Routes } from "react-router";
import "./App.css";

import MuiTypography from "./components/MuiTypography";
import { Button, ButtonGroup, Stack } from "@mui/material";
import MuiButton from "./components/MuiButton";
import MuiTextFeild from "./components/MuiTextFeild";
import MuiSelect from "./components/MuiSelect";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiSwitch from "./components/MuiSwitch";
import MuiRating from "./components/MuiRating";
import MuiAutoComplete from "./components/MuiAutoComplete";
import MuiLayoutBox from "./components/MuiLayoutBox";

function App() {
  return (
    <div className="App">
      <nav>
        <Stack spacing={2} direction={"row"}>
          {/* <ButtonGroup size="small" spacing={2}> */}
          <Link to="/">
            <Button variant="contained" size="small">
              Mui-Typography
            </Button>
          </Link>
          <Link to="buttonComponent">
            <Button variant="contained" size="small">
              Mui-Button
            </Button>
          </Link>
          <Link to="textFieldComponent">
            <Button variant="contained" size="small">
              Mui-TextFeild
            </Button>
          </Link>
          <Link to="selectComponent">
            <Button variant="contained" size="small">
              Mui-Select
            </Button>
          </Link>
          <Link to="radioComponent">
            <Button variant="contained" size="small">
              Mui-Radio
            </Button>
          </Link>
          <Link to="checkboxComponent">
            <Button variant="contained" size="small">
              Mui-Checkbox
            </Button>
          </Link>
          <Link to="switchComponent">
            <Button variant="contained" size="small">
              Mui-Switch
            </Button>
          </Link>
          <Link to="ratingComponent">
            <Button variant="contained" size="small">
              Mui-Rating
            </Button>
          </Link>
          <Link to="autoCompleteComponent">
            <Button variant="contained" size="small">
              Mui-AutoComplete
            </Button>
          </Link>
          <Link to="boxLayoutComponent">
            <Button variant="contained" size="small">
              Mui-boxlayout
            </Button>
          </Link>
          {/* </ButtonGroup> */}
        </Stack>
      </nav>
      <Routes>
        <Route path="/" element={<MuiTypography />} />
        <Route path="/buttonComponent" element={<MuiButton />} />
        <Route path="/textFieldComponent" element={<MuiTextFeild />} />
        <Route path="/selectComponent" element={<MuiSelect />} />
        <Route path="/radioComponent" element={<MuiRadioButton />} />
        <Route path="/checkboxComponent" element={<MuiCheckbox />} />
        <Route path="/switchComponent" element={<MuiSwitch />} />
        <Route path="/ratingComponent" element={<MuiRating />} />
        <Route path="/autoCompleteComponent" element={<MuiAutoComplete />} />
        <Route path="/boxLayoutComponent" element={<MuiLayoutBox />} />
      </Routes>
    </div>
  );
}

export default App;
