import React, { useState } from 'react';
import { AppBar, Box, Toolbar, styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import { Mail, Notifications, Pets} from '@mui/icons-material';

const StyledToolBar = styled(Toolbar) ({
    display:"flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none", 
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex", 
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}));

export const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
        <StyledToolBar>
            <Typography variant='h6'  sx={{display: {xs: "none", sm: "block"}}}>Jabr 47</Typography>
            <Pets sx={{display: {xs: "block", sm: "none"}}}/>
            <Search>
                <InputBase placeholder='search...'></InputBase>
            </Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail />
                </Badge>

                <Badge badgeContent={2} color="error">
                    <Notifications />
                </Badge>
                <Avatar sx={{width: 25, height: 25}} alt="" src="https://material-ui.com/static/images/avatar/9.jpg"
                onClick={(e) => setOpen(true)} 
                />
            </Icons>
            <UserBox onClick={(e) => setOpen(true)}>
                <Avatar sx={{width: 25, height: 25}} alt="" src="https://material-ui.com/static/images/avatar/9.jpg"/>
                <Typography >Jabr</Typography>
            </UserBox>
        </StyledToolBar>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

    </AppBar>
  )
}
