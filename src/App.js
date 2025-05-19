import { Link, Route, Routes } from "react-router";
import "./App.css";

import MuiTypography from "./components/MuiTypography";
import {
  AppBar,
  Button,
  ButtonGroup,
  Stack,
  Toolbar,
  Box,
} from "@mui/material";
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
import MuiNavbar from "./components/MuiNavbar";
import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
import MuiDrawer from "./components/MuiDrawer";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import MuiAvatar from "./components/MuiAvatar";
import MuiBadge from "./components/MuiBadge";

function App() {
  const navItems = [
    { path: "/", label: "Mui-Typography" },
    { path: "buttonComponent", label: "Mui-Button" },
    { path: "textFieldComponent", label: "Mui-TextFeild" },
    { path: "selectComponent", label: "Mui-Select" },
    { path: "radioComponent", label: "Mui-Radio" },
    { path: "checkboxComponent", label: "Mui-Checkbox" },
    { path: "switchComponent", label: "Mui-Switch" },
    { path: "ratingComponent", label: "Mui-Rating" },
    { path: "autoCompleteComponent", label: "Mui-AutoComplete" },
    { path: "boxLayoutComponent", label: "Mui-boxlayout" },
    { path: "grid", label: "Mui-Grid" },
    { path: "cardComponent", label: "Mui-Card" },
    { path: "accordionComponent", label: "Mui-Accordion" },
    { path: "navbar", label: "Mui-Navbar" },
    { path: "breadcrumbsComponent", label: "Mui-Breadcrumbs" },
    { path: "drawerComponent", label: "Mui-Drawer" },
    { path: "bottomNavigationComponent", label: "Mui-Bottom Navigation" },
    { path: "avatarComponent", label: "Mui-Avatar" },
    { path: "badgeComponent", label: "Mui-Badge" },
  ];

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: "flex", flexWrap: "wrap" }} gap={2}>
            {navItems.map((item, index) => (
              <Link key={index} to={item.path}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}

            {/* <Link to="/">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Mui-Typography
              </Button>
            </Link>
            <Link to="buttonComponent">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Mui-Button
              </Button>
            </Link>
            <Link to="textFieldComponent">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Mui-TextFeild
              </Button>
            </Link>
            <Link to="selectComponent">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Mui-Select
              </Button>
            </Link>
            <Link to="radioComponent">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Mui-Radio
              </Button>
            </Link>
            <Link to="checkboxComponent">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Mui-Checkbox
              </Button>
            </Link>
            <Link to="switchComponent">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Mui-Switch
              </Button>
            </Link>
            <Link to="ratingComponent">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Mui-Rating
              </Button>
            </Link>
            <Link to="autoCompleteComponent">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Mui-AutoComplete
              </Button>
            </Link>
            <Link to="boxLayoutComponent">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Mui-boxlayout
              </Button>
            </Link>
            <Link to="grid">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Mui-Grid
              </Button>
            </Link>
            <Link to="cardComponent">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Mui-Card
              </Button>
            </Link>
            <Link to="accordionComponent">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Mui-Accordion
              </Button>
            </Link>
            <Link to="navbar">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Mui-Navbar
              </Button>
            </Link>
            <Link to="breadcrumbsComponent">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Mui-Breadcrumbs
              </Button>
            </Link>
            <Link to="drawerComponent">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Mui-Drawer
              </Button>
            </Link>
            <Link to="bottomNavigationComponent">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Mui-Bottom Navigation
              </Button>
            </Link> */}
          </Box>
        </Toolbar>
      </AppBar>
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
        <Route path="/navbar" element={<MuiNavbar />} />
        <Route path="/breadcrumbsComponent" element={<MuiBreadcrumbs />} />
        <Route path="/drawerComponent" element={<MuiDrawer />} />
        <Route
          path="/bottomNavigationComponent"
          element={<MuiBottomNavigation />}
        />
        <Route path="/avatarComponent" element={<MuiAvatar />} />
        <Route path="/badgeComponent" element={<MuiBadge />} />
      </Routes>
    </div>
  );
}

export default App;
