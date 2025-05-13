import { Link, Route, Routes } from "react-router";
import "./App.css";

import MuiTypography from "./components/MuiTypography";
import { Button, Stack } from "@mui/material";
import MuiButton from "./components/MuiButton";

function App() {
  return (
    <div className="App">
      <nav style={{ marginBottom: "15px" }}>
        <Stack spacing={4} direction={"row"}>
          <Link to="/">
            <Button variant="contained">Mui-Typography</Button>
          </Link>
          <Link to="buttonComponent">
            <Button variant="contained">Mui-Button</Button>
          </Link>
        </Stack>
      </nav>
      <Routes>
        <Route path="/" element={<MuiTypography />} />
        <Route path="/buttonComponent" element={<MuiButton />} />
      </Routes>
    </div>
  );
}

export default App;
