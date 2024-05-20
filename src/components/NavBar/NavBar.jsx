
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
import menuData from './navBarData.json'
import { Link, useNavigate } from "react-router-dom";

const NavBar = () =>{

  const [ anchorElNav, setAnchorElNav ] = useState(null);
  const [ anchorElUser, setAnchorElUser ] = useState(null);
	const [ expanded, setExpanded ] = useState(false);
  const [ screenSize, setScreenSize ] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [ hoverStates, setHoverStates ] = useState({ COMPANY: false, BUSINESS: false, PRIR: false, CONTACTS: false });
  const [ activatedHoverData, setActivatedHoverData] = useState({});
  const [ showSubMenu, setShowSubMenu ] = useState(false)
  const navigate = useNavigate();
  const [ currentPage, setCurrentPage ] = useState('');

  const handleOpenNavMenu = (event) => {

    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
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

  const hoverEnterHandler = (index, stateName) => {
    // const trueCount = isHovered.reduce((acc, val) => acc + (val === true ? 1 : 0), 0);
    setHoverStates({ COMPANY: false, BUSINESS: false, PRIR: false, CONTACTS: false });
    setHoverStates((prev) => { return {...prev, [stateName]: true } });
    setActivatedHoverData(menuData[index])
    setShowSubMenu(true);
  };

  const hoverLeaveHandler = (index) => {
    setHoverStates({ COMPANY: false, BUSINESS: false, PRIR: false, CONTACTS: false });
    setShowSubMenu(false);
  };

  const handleSubMenuEnter = (stateName) => {
    // 서브메뉴에 마우스가 들어왔을 때, 타이머 초기화하여 서브메뉴 유지
    setHoverStates({ COMPANY: false, BUSINESS: false, PRIR: false, CONTACTS: false });
    setHoverStates((prev) => { return {...prev, [stateName]: true } });
    setShowSubMenu(true)
  };

  const handleSubMenuLeave = () => {
    // 서브메뉴에서 마우스가 벗어났을 때, 타이머 시작하여 submenu가 사라지도록 함
    setHoverStates({ COMPANY: false, BUSINESS: false, PRIR: false, CONTACTS: false });
    setShowSubMenu(false);
  };

  const movePageHandler = (URL) => {
    navigate(URL);
  };

  
  return (
    <>
      <div className={styles.navBarWrapper} >
        <AppBar position="static"  sx={{transform: `scaleX(${expanded ? '1' : '0'})`, transition: 'transform ,1.5s', margin: 'auto', borderRadius:"0 0 10px 10px", backgroundColor:"transparent",border: "0px", boxShadow: "none" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {screenSize.width > 899 ? 
                (<Link to={process.env.PUBLIC_URL + "/"} style={{textDecoration: "none", cursor:"pointer"}}>
                  <img src={ process.env.PUBLIC_URL + "/img/logo.png"} style={{width:"25.5px", height:"26px"}} alt="logo"/>
                </Link>)
                :
                null }
              {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex', fontSize: "30px" }, mr: 1 }} /> */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
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
                <Link to={process.env.PUBLIC_URL + "/"} style={{textDecoration: "none", cursor:"pointer", marginBottom: "0px", paddingBottom: "-5px"}}>
                  <span style={{color:"#ca4b34", fontSize: "35px"}}>G</span>
                  <span style={{color:"#4975DB", fontSize: "35px"}}>E</span>
                  <span style={{color:"#4975DB", fontSize: "35px"}}>D</span>
                </Link>
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
                  {menuData.map((data, index) => {
                    return (
                      <MenuItem 
                        key={data.id} 
                        onClick={()=>{
                          handleCloseNavMenu();
                          movePageHandler(process.env.PUBLIC_URL+ data.route);
                        }}

                      >
                        <Typography textAlign="center">{data.menu}</Typography>
                      </MenuItem>
                  )})}
                </Menu>
              </Box>
              {screenSize.width < 899 ? 
                (<Link to={process.env.PUBLIC_URL + "/"} style={{textDecoration: "none", cursor:"pointer"}}>
                <img src={process.env.PUBLIC_URL + "/img/logo.png"} style={{width:"25.5px", height:"26px"}} alt="logo"/>
                </Link>)
                : 
                null }
              {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
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
                <Link to={ process.env.PUBLIC_URL + "/"} style={{textDecoration: "none", cursor:"pointer", marginBottom: "0px", paddingBottom: "-5px"}}>
                  <span style={{color:"#ca4b34", fontSize: "35px"}}>G</span>
                  <span style={{color:"#4975DB", fontSize: "35px"}}>E</span>
                  <span style={{color:"#4975DB", fontSize: "35px"}}>D</span>
                </Link>
              </Typography>
              {/*  확장 메뉴 */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                {menuData.map((data, index) => {
                  return(
                    <Button
                      size="large"
                      key={index + data.id}
                      onClick={() =>{movePageHandler(process.env.PUBLIC_URL+ data.route);}}
                      onMouseEnter={() => hoverEnterHandler(index, data.stateName)}
                      onMouseLeave={() => hoverLeaveHandler(index, data.stateName)}
                      sx={{ mr: 2, my: 2, color: `${hoverStates[`${data.stateName}`]? "#494949":"#b0b8ca"}`,
                          display: 'block', fontWeight:"700", height:"100%", marginRight:"15px", marginBottom: "0px", paddingBottom: "16px" }}
                    >
                        {data.menu}
                    </Button>
                    )}
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {showSubMenu === true && activatedHoverData.menu !== "CONTACT" ? 
          (<SubMenu
            activatedHoverData={activatedHoverData}
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


