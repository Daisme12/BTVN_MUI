import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Header() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyShop
        </Typography>
    
          <Typography variant="body1">
            Xin chào, <b>{user.email}</b>
          </Typography>
          <Button color="inherit" href="/">
            Đăng xuất
          </Button>
        
      </Toolbar>
    </AppBar>
  );
}

export default Header;