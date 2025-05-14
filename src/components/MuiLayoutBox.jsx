import { Box, Divider, Stack, Paper } from "@mui/material";

function MuiLayoutBox() {
  return (
    <Paper sx={{ padding: "32px" }}>
      <Stack
        sx={{ border: "1px solid" }}
        direction={"row"}
        spacing={2}
        width={"600px"}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            width: "100px",
            height: "100px",
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
          height={"100px"}
          width={"100px"}
          p={"16px"}
          color={"white"}
        >
          Hello world
        </Box>
      </Stack>
    </Paper>
  );
}
export default MuiLayoutBox;
