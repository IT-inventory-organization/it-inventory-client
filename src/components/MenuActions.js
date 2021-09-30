import { styled } from "@mui/system";
import { alpha, Button, Menu } from "@mui/material";
import React from "react";
import { ReactComponent as IcChevronShort } from "../assets/icons/ic_chevrons_sort.svg";

function MenuActions(props) {
  const { children, placeholder } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <StyledButton
        id="menu_action"
        aria-controls="menu_action"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        endIcon={<IcChevronShort />}
      >
        {placeholder}
      </StyledButton>
      <StyledMenu
        id="menu_action"
        MenuListProps={{
          "aria-labelledby": "menu_action",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {children}
      </StyledMenu>
    </>
  );
}

const StyledButton = styled(Button)({
  "&&&": {
    textTransform: "capitalize",
    color: "#95C0F9",
    borderColor: "#95C0F9",
  },
  svg: {
    width: "16px",
    height: "16px",
    path: {
      stroke: "#95C0F9",
    },
  },
});

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      color: "#95C0F9",
      svg: {
        width: "18px",
        height: "18px",
        marginRight: theme.spacing(1.5),
        "circle,path": {
          stroke: "#95C0F9",
        },
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default React.memo(MenuActions);
