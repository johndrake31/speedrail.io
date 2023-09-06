import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import useWindowDimensions from "../../hooks/UseWindowDimensions";
import logoTitle from "../../assets/spokesolve_no_bg.svg";
import TitleText from "../../assets/ss_title_text.svg";
export interface ICustomForm {
  status: any;
  message: any;
  onValidated: any;
}
const style = {
  width: "80%",
  marginRight: "auto",
  marginLeft: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const CustomForm: React.FC<ICustomForm> = ({
  status,
  message,
  onValidated,
}) => {
  const matches = useMediaQuery("(min-width:600px)");
  const { width } = useWindowDimensions();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
      });
    setFirstName("");
    setLastName("");
    setEmail("");
    setOpen(false);
  };

  useEffect(() => {
    const hasShown = localStorage.getItem("hasShownEmailform");
    if (!hasShown) {
      setTimeout(() => {
        localStorage.setItem("hasShownEmailform", "true");
        handleOpen();
      }, 1000);
    }
  }, []);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflow: "scroll", paddingTop: 10, paddingBottom: 10, width }}
      >
        <Box component="form" sx={style} noValidate autoComplete="off">
          <CloseIcon
            fontSize="large"
            sx={{
              alignSelf: "flex-end",
              marginRight: matches ? 1 : 2,
              cursor: "pointer",
            }}
            onClick={handleClose}
          />
          <img
            style={{ maxHeight: 80, borderRadius: 12 }}
            src={logoTitle}
            alt="logo"
          />
          <img
            style={{ maxHeight: 80, borderRadius: 12 }}
            src={TitleText}
            alt="logo"
          />
          <Typography
            variant={matches ? "h5" : "h6"}
            sx={{ textAlign: "center", my: 4 }}
          >
            Join our email list for company and product updates!
          </Typography>

          <Typography variant="h4" sx={{ textAlign: "center" }}>
            E-mail
          </Typography>
          <TextField
            id="outlined-basic-email"
            label="Email"
            variant="outlined"
            sx={{ my: 2 }}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            First Name
          </Typography>
          <TextField
            id="outlined-basic-pass"
            label="First Name"
            variant="outlined"
            sx={{ my: 2 }}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Last Name
          </Typography>
          <TextField
            id="outlined-basic-pass"
            label="Last Name"
            variant="outlined"
            sx={{ my: 2 }}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
          <Button variant="outlined" onClick={() => handleSubmit()}>
            Submit
          </Button>
          <Button sx={{ mt: 3, mb: 5 }} variant="text" onClick={handleClose}>
            cancel
          </Button>
        </Box>
      </Modal>
      <Button
        color="inherit"
        size="large"
        sx={{ mt: 3, mb: 5, color: "white", fontSize: 20 }}
        variant="outlined"
        onClick={handleOpen}
      >
        Signup for Updates
      </Button>
    </>
  );
};

export default CustomForm;
