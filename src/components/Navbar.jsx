import {useState} from "react";
import { Toolbar, styled, AppBar, Typography, InputBase , Badge, Avatar, Menu, MenuItem} from "@mui/material";
import { InstallDesktop as InstallDesktopIcon, MailOutline as Mail, Notifications } from "@mui/icons-material";


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const UserBox = styled("Box")(({ theme }) => ({
  display: "flex",
  gap : "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")] :{
    display: "none",
  }
  
}));
const Icons = styled("Box")(({ theme }) => ({
  display: "none",
  gap : "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")] :{
    display: "flex",
  }

}));

const Navbar = () => {
  const [open , setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          InstaGood
        </Typography>
        <InstallDesktopIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search...">Search</InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{width:30 , height: 30}} onClick={e=>setOpen(true)} alt="Travis Howard" src="https://mui.com/static/images/avatar/1.jpg" />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar sx={{width:30 , height: 30}} alt="Travis Howard" src="https://mui.com/static/images/avatar/1.jpg"/>
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>  
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={ open }
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
export default Navbar;

