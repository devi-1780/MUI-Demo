import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function MuiSkeleton() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <Box sx={{ p: "40px" }}>
      {loading ? (
        <Skeleton variant="rectangular" width={256} height={144} />
      ) : (
        <img
          src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="skeleton"
          width={256}
          height={144}
        />
      )}
      <Stack spacing={2} direction={"row"} width={250}>
        {loading ? (
          <Skeleton
            variant="circular"
            width={50}
            height={50}
            animation="wave"
          />
        ) : (
          <Avatar>V</Avatar>
        )}
        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
              <Typography variant="body2">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1">React MUI Tutorial</Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
