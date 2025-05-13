import { Typography } from "@mui/material";
function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">H1 heading</Typography>
      <Typography variant="h2">H2 heading</Typography>
      <Typography variant="h3">H3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        H4 heading
      </Typography>
      <Typography variant="h5">H5 heading</Typography>
      <Typography variant="h6">H6 heading</Typography>

      <Typography variant="subtitle1">sub-title1 </Typography>
      <Typography variant="subtitle2">sub-title2 </Typography>

      <Typography variant="body1">
        This is one of the paragraph in typograpy
      </Typography>
      <Typography variant="body2">
        This is one of the paragraph in typograpy
      </Typography>
    </div>
  );
}
export default MuiTypography;
