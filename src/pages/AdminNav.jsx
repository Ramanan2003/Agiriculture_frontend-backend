// // components/AdminNavbar.jsx

// import React from 'react';
// import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import SettingsIcon from '@mui/icons-material/Settings';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   navbar: {
//     backgroundColor: '#34495e', // Admin Navbar background color
//   },
//   logo: {
//     fontFamily: 'cursive',
//     fontWeight: 700,
//     letterSpacing: '.2rem',
//     color: '#ecf0f1',
//     textDecoration: 'none',
//   },
//   button: {
//     margin: '0 10px',
//     padding: '10px 15px',
//     borderRadius: '8px',
//     color: '#ecf0f1',
//     background: '#3498db',
//     border: 'none',
//     cursor: 'pointer',
//     transition: 'background 0.3s ease',
//     '&:hover': {
//       background: '#2980b9',
//     },
//   },
//   avatar: {
//     marginTop: '15px',
//   },
// });

// function AdminNavbar() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleOpenMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleCloseMenu = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar position="static" className={classes.navbar}>
//       <Toolbar>
//         <Typography variant="h6" noWrap component={Link} to="/admin/dashboard" className={classes.logo}>
//           Admin Dashboard
//         </Typography>

//         <Box sx={{ flexGrow: 1 }} />

//         <Tooltip title="Dashboard">
//           <IconButton component={Link} to="/admin/dashboard" color="inherit">
//             <DashboardIcon />
//           </IconButton>
//         </Tooltip>

//         <Tooltip title="Settings">
//           <IconButton onClick={handleOpenMenu} color="inherit">
//             <SettingsIcon />
//           </IconButton>
//         </Tooltip>

//         <Menu
//           anchorEl={anchorEl}
//           anchorOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//           id="menu-appbar"
//           keepMounted
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//           open={Boolean(anchorEl)}
//           onClose={handleCloseMenu}
//         >
//           <MenuItem onClick={handleCloseMenu} component={Link} to="/admin/profile">
//             Profile
//           </MenuItem>
//           <MenuItem onClick={handleCloseMenu} component={Link} to="/admin/settings">
//             Settings
//           </MenuItem>
//         </Menu>

//         <Tooltip title="Logout">
//           <IconButton component={Link} to="/admin/logout" color="inherit">
//             <ExitToAppIcon />
//           </IconButton>
//         </Tooltip>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default AdminNavbar;
