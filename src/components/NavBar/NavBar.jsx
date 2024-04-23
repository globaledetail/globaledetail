


import React, { useState, useEffect } from "react"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { SubMenu } from "./SubMenu";

import styles from './NavBar.module.css'
import ReactPlayer from 'react-player'
import { hover } from "@testing-library/user-event/dist/hover";

const pages = ['Company', 'Business', 'PR/IR', 'CONTACTS'];

const NavBar = () =>{
  const [ anchorElNav, setAnchorElNav ] = useState(null);
  const [ anchorElUser, setAnchorElUser ] = useState(null);
	const [ expanded, setExpanded ] = useState(false);
  const [ screenSize, setScreenSize ] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [ isHovered, setIsHovered ] = useState(Array(pages.length).fill(false)); // 메뉴 아이템별 hover 상태
  const [ showSubMenu, setShowSubMenu ] = useState(false)

  const handleOpenNavMenu = (event) => {
    console.log("aa")
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    console.log("aadfasdfasd")
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpanded(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 

  const hoverEnterHandler = (index) =>{
    const updatedHovered = [...isHovered];
    updatedHovered[index] = true;
    setIsHovered(updatedHovered);
    setShowSubMenu(true);
  };

  const hoverLeaveHandler = (index) =>{
    const updatedHovered = [...isHovered];
    updatedHovered[index] = false;
    setIsHovered(updatedHovered);
    setShowSubMenu(false);
  };

  console.log(Array(pages.length).fill(false))

  return (
    <>
      <div className={styles.navBarWrapper}>
        <AppBar position="static" sx={{transform: `scaleX(${expanded ? '1' : '0'})`, transition: 'transform ,1.5s', margin: 'auto', borderRadius:"0 0 10px 10px", backgroundColor:"transparent",border: "0px", boxShadow: "none" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {screenSize.width > 899 ? 
                (<img src="/img/logo.png" style={{width:"25.5px", height:"26px"}} alt="logo"/>)
                : 
                null }
              {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex', fontSize: "30px" }, mr: 1 }} /> */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  fontSize: "30px",
                  marginLeft:"10px"
                }}
              >
                 <span style={{color:"white"}}>G </span>
                 <span style={{color:"white"}}>E</span>
                 <span style={{color:"white"}}>D</span>
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
                >
                  {pages.map((page, index) => (
                    <MenuItem 
                      key={page} 
                      onClick={handleCloseNavMenu}

                    >
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              {screenSize.width < 899 ? 
                (<img src="/img/logo.png" style={{width:"25.5px", height:"26px"}} alt="logo"/>)
                : 
                null }
              {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  fontSize: "30px",
                  marginLeft:"10px"
                }}
              >
                 <span style={{color:"white"}}>G </span>
                 <span style={{color:"white"}}>E</span>
                 <span style={{color:"white"}}>D</span>
              </Typography>
              {/*  확장 메뉴 */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page, index) => (
                  <Button
                    size="large"
                    key={index}
                    onClick={handleCloseNavMenu}
                    onMouseEnter={() => hoverEnterHandler(index)}
                    onMouseLeave={() => hoverLeaveHandler(index)}
                    sx={{ mr: 2,my: 2, color: `${isHovered[index] === true? "black":"white"}`, display: 'block',fontWeight:"700" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {showSubMenu === true ? 
          (<SubMenu isHovered ={isHovered}/>) 
          : 
          null}
      </div>	
    </>
  )
}

export default NavBar


