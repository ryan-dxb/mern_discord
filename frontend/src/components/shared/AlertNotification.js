import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const AlertNotification = () => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open
      onClose={() => {}}
      autoHideDuration={3000}
    >
      <Alert severity="error">This is an error message!</Alert>
    </Snackbar>
  );
};

export default AlertNotification;
