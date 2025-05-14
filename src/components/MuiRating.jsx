import { FormControlLabel, Rating, Stack } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function MuiRating() {
  let [value, setValue] = useState(null);
  console.log({ value });
  function handleRating(e) {
    setValue(e.target.value);
  }
  return (
    <Stack spacing={2}>
      <FormControlLabel
        control={
          <Rating
            size="large"
            precision={"0.5"}
            value={value}
            onChange={handleRating}
            icon={<FavoriteIcon fontSize="bold" color="error" />}
            emptyIcon={<FavoriteBorderIcon fontSize="bold" />}
          />
        }
      />
    </Stack>
  );
}
export default MuiRating;
