import { CircularProgress, LinearProgress, Stack } from "@mui/material";

export default function MuiProgress() {
  return (
    <Stack spacing={2} sx={{ p: "40px" }}>
      <CircularProgress />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" variant="determinate" value={70} />

      <LinearProgress />
      <LinearProgress color="secondary" />
      <LinearProgress color="success" variant="determinate" value={70} />
    </Stack>
  );
}
