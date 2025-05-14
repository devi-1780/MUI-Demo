import { Box } from "@mui/material";

function MuiLayoutBox() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          width: "250px",
          height: "250px",
          padding: "16px",
          "&: hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Hello world
      </Box>
      <Box
        bgcolor={"success.light"}
        height={"250px"}
        width={"250px"}
        p={"16px"}
        color={"white"}
      >
        Hello world
      </Box>
    </>
  );
}
export default MuiLayoutBox;
