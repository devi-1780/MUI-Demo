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
import MuiGrid from "./components/MuiGrid";
import MuiCard from "./components/MuiCard";
import MuiAccordion from "./components/MuiAccordion";

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
          <Link to="grid">
            <Button variant="contained" size="small">
              Mui-Grid
            </Button>
          </Link>
          <Link to="cardComponent">
            <Button variant="contained" size="small">
              Mui-Card
            </Button>
          </Link>
          <Link to="accordionComponent">
            <Button variant="contained" size="small">
              Mui-Accordion
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
        <Route path="/grid" element={<MuiGrid />} />
        <Route path="/cardComponent" element={<MuiCard />} />
        <Route path="/accordionComponent" element={<MuiAccordion />} />
      </Routes>
    </div>
  );
}

export default App;
