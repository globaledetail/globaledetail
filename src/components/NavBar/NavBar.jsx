


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
import { SubMenu } from "./SubMenu";

import styles from './NavBar.module.css'


const pages = ['Company', 'Business', 'PR/IR', 'CONTACTS'];

const NavBar = () =>{
  const [ anchorElNav, setAnchorElNav ] = useState(null);
  const [ anchorElUser, setAnchorElUser ] = useState(null);
	const [ expanded, setExpanded ] = useState(false);
  const [ screenSize, setScreenSize ] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [ isHovered, setIsHovered ] = useState(Array(pages.length).fill(false)); // 메뉴 아이템별 hover 상태
  const [ navBarIndex, setNavBarIndex ] = useState(null);
  const [ submenuTimer, setSubmenuTimer ] = useState(null);
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

 

  const hoverEnterHandler = (index) => {
    const trueCount = isHovered.reduce((acc, val) => acc + (val === true ? 1 : 0), 0);
    if(trueCount > 1 ){
      setIsHovered([false,false,false,false]);
    };

    const updatedHovered = [...isHovered];
    updatedHovered[index] = true;

    setIsHovered([false,false,false,false]);
    setIsHovered(updatedHovered);
    setNavBarIndex(index);
    setShowSubMenu(true);
  };

console.log(navBarIndex)
  const hoverLeaveHandler = (index) => {
    setIsHovered([false,false,false,false]);
    setShowSubMenu(false);
  };

  const handleSubMenuEnter = () => {
    // 서브메뉴에 마우스가 들어왔을 때, 타이머 초기화하여 서브메뉴 유지
    const updatedHovered = [...isHovered];
    updatedHovered[navBarIndex] = true;
    setIsHovered(updatedHovered)
    setShowSubMenu(true)
  };

  const cleaerIsHover = () =>{

  };

  const handleSubMenuLeave = () => {
    // 서브메뉴에서 마우스가 벗어났을 때, 타이머 시작하여 submenu가 사라지도록 함
    setIsHovered([false, false, false, false]);


    console.log("실행")

    setShowSubMenu(false);
  };

  console.log(isHovered)

  return (
    <>
      <div className={styles.navBarWrapper} >
        <AppBar position="static"  sx={{transform: `scaleX(${expanded ? '1' : '0'})`, transition: 'transform ,1.5s', margin: 'auto', borderRadius:"0 0 10px 10px", backgroundColor:"transparent",border: "0px", boxShadow: "none" }}>
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
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                {pages.map((page, index) => (
                      <Button
                        size="large"
                        key={index}
                        onClick={handleCloseNavMenu}
                        onMouseEnter={() => hoverEnterHandler(index)}
                        onMouseLeave={() => hoverLeaveHandler(index)}
                        sx={{ mr: 2,my: 2, color:  `${isHovered[index]? "black":"white"}`,
                              display: 'block', fontWeight:"700", height:"100%", marginRight:"15px",marginBottom: "0px", paddingBottom: "16px" }}
                      >
                        {page}
                      </Button>
                    )
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {showSubMenu === true ? 
          (<SubMenu
            navBarIndex={navBarIndex}
            isHovered={isHovered}
            handleSubMenuEnter={handleSubMenuEnter}
            handleSubMenuLeave={handleSubMenuLeave}
          />) 
          : 
          null}
      </div>	
    </>
  )
}

export default NavBar


