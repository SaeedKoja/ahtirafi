import { ListItem, styled } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export const StyledLoadingButton = styled(LoadingButton)(({ theme }) =>
  theme.unstable_sx({
    fontSize: { xs: "13px" },
    width: "100%",
    height: { xs: "38px", md: "42px" },
    p: 0,
    borderRadius: "4px",
    borderColor: "primary.500",
    bgcolor: "primary.500",
    "&:hover": { bgcolor: "primary.500", boxShadow: "0", opacity: "0.9" },
    "&.MuiLoadingButton-loading": {
      backgroundColor: "primary.500",
      opacity: "0.8",
    },
  })
);

export const ListItemStyled = styled(ListItem)(({ theme }) => ({
  padding: 0,
  ".MuiButtonBase-root": {
    whiteSpace: "nowrap",
    marginBottom: "2px",
    borderRadius: "8px",
    color: "#202020",
    "&:hover": {
      backgroundColor: "#106FF4",
      color: "#fff",
    },
    "&.Mui-selected": {
      color: "#fff",
      backgroundColor: "#106FF4",
      "&:hover": {
        backgroundColor: "#106FF4",
      },
    },
  },
}));
