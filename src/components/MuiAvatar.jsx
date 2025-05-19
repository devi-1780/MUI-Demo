import { Avatar, Stack } from "@mui/material";

function MuiAvatar() {
  return (
    <Stack spacing={4}>
      <Stack spacing={1} direction={"row"}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>
      <Stack spacing={1} direction={"row"}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        <Avatar
          sx={{ height: 50, width: 50 }}
          src="https://t4.ftcdn.net/jpg/03/83/25/83/240_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
        />
      </Stack>
      <Stack spacing={1} direction={"row"}>
        <Avatar sx={{ bgcolor: "primary.light", width: 50, height: 50 }}>
          BW
        </Avatar>
        <Avatar sx={{ bgcolor: "success.light", width: 50, height: 50 }}>
          CK
        </Avatar>
      </Stack>
    </Stack>
  );
}
export default MuiAvatar;
