import {
  Card,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

function MuiCard() {
  return (
    <Box bgcolor={"white"} width={"300px"}>
      <Card>
        <CardMedia
          height={"100px"}
          component={"img"}
          image="https://www.uplers.com/wp-content/uploads/2022/07/Key-React-JS-Developer-Skills-03-1024x536.jpg"
        ></CardMedia>
        <CardContent>
          <Typography component="div" variant="h5">
            React
          </Typography>
          <Typography component="p" variant="body2">
            React is one of the Javascript library. Which is used to building
            the user interfaces.
          </Typography>
        </CardContent>
        <CardActions size="small">
          <Button>share</Button>
          <Button>Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
export default MuiCard;
