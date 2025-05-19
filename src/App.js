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
import MuiList from "./components/MuiList";
import MuiChip from "./components/MuiChip";
import MuiTooltip from "./components/MuiTooltip";
import MuiTable from "./components/MuiTable";

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
    { path: "listComponent", label: "Mui-List" },
    { path: "chipComponent", label: "Mui-Chip" },
    { path: "tooltip", label: "Mui-Tooltip" },
    { path: "table", label: "Mui-Table" },
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
        <Route path="/listComponent" element={<MuiList />} />
        <Route path="/chipComponent" element={<MuiChip />} />
        <Route path="/tooltip" element={<MuiTooltip />} />
        <Route path="/table" element={<MuiTable />} />
      </Routes>
    </div>
  );
}

export default App;
