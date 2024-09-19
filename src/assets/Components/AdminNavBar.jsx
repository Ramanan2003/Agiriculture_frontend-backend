// AdminNavbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import TemporaryDrawer from './sideBar';

const pages = [
  { label: 'User detail', path: '/admin-home' },
  { label: 'Admin Dashboard', path: '/admin/dashboard' },
  {label:'Add Loan',path:'/addloan'},
];

const settings = [
  { label: 'Profile', path: '/profile' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Logout', path: '/login' },
];

const navbarStyles = {
  backgroundColor: '#2c3e50',
};

const logoStyles = {
  fontFamily: 'cursive',
  fontWeight: 700,
  letterSpacing: '.2rem',
  color: '#ecf0f1',
  textDecoration: 'none',
};

const buttonStyles = {
  margin: '0 10px',
  padding: '10px 15px',
  borderRadius: '8px',
  color: '#ecf0f1',
  background: '#3498db',
  border: 'none',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
  '&:hover': {
    background: '#2980b9',
  },
};

const avatarStyles = {
  marginTop: '15px',
};

function AdminNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (path) => {
    setAnchorElUser(null);

    if (path) {
      // Redirect to the specified path using useNavigate
      navigate(path);
    }
  };

  return (
    <AppBar position="static" sx={navbarStyles}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TemporaryDrawer />
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{ ...logoStyles, mr: 2 }}
          >
            AGRIWEB Admin
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            ></Menu>
          </Box>

          {pages.map((page) => (
            <Button
              key={page.label}
              component={Link}
              to={page.path}
              onClick={handleCloseNavMenu}
              sx={buttonStyles}
            >
              {page.label}
            </Button>
          ))}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={() => handleCloseUserMenu('')} // Pass an empty string for now
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting.label}
                onClick={() => handleCloseUserMenu(setting.path)}
                component={Link}
                to={setting.path}
              >
                <Typography textAlign="center">{setting.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AdminNavbar;
