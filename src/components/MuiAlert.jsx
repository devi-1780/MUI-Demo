import { Alert, AlertTitle, Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
function MuiAlert() {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is error message.</Alert>
      <Alert severity="warning">This is warning message.</Alert>
      <Alert severity="info">This is info message.</Alert>
      <Alert severity="success">This is success message.</Alert>

      <Alert variant="outlined" severity="error">
        This is error message.
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is warning message.
      </Alert>
      <Alert variant="outlined" severity="info">
        This is info message.
      </Alert>
      <Alert variant="outlined" severity="success">
        This is success message.
      </Alert>

      <Alert variant="filled" severity="error">
        <AlertTitle>Error</AlertTitle>
        This is error message.
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warngin</AlertTitle>
        This is warning message.
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is info message.
      </Alert>
      <Alert variant="filled" severity="success" icon={<CheckIcon />}>
        <AlertTitle>Success</AlertTitle>
        This is success message.
      </Alert>
    </Stack>
  );
}
export default MuiAlert;
