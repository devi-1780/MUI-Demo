import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

function MuiDailog() {
  let [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dailog</Button>
      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        transitionDuration={4000}
      >
        <DialogTitle>Sure we want to submit?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are sure want to delete the for or submit the form?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button autoFocus onClick={() => setOpen(false)}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default MuiDailog;
