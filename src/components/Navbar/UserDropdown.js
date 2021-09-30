import {
  Avatar,
  Divider,
  experimentalStyled,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function UserDropdown() {
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
      <DropdownWrap
        onClick={(e) => handleClick(e)}
        alignItems="center"
        spacing={1}
        direction="row"
      >
        <Avatar alt="User" src="" />
        <Typography style={{ fontWeight: "700", color: "#313751" }}>
          Administrator
        </Typography>
        <img
          style={{ stroke: "red" }}
          src={require("../../assets/icons/ic_chevron.svg").default}
          alt=""
        />
      </DropdownWrap>

      <Menu
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Change Password</MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}

const DropdownWrap = experimentalStyled(Stack)({
  background: "#fff",
  userSelect: "none",
  cursor: "pointer",
});

export default React.memo(UserDropdown);
