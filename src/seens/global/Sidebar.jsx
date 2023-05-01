
import { Sidebar, Menu, MenuItem, SubMenu,useProSidebar,sidebarClasses } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from '../../theme';
import logo from '../../assts/admin-logo.png'

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import { MenuOutlined } from '@mui/icons-material';
import { useState } from 'react';

const Sidebarr = () => {

  const { collapseSidebar, collapsed } = useProSidebar();
  const theme=useTheme();
  const colors=tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");

  return (
 
    <Sidebar
    rootStyles={{
      [`.${sidebarClasses.container}`]: {
        backgroundColor: `${colors.primary[400]}`,
      },
    }}
  >
    <Menu
    iconShape="square"
    >
      <MenuItem
        onClick={() => collapseSidebar()}
        icon={collapsed ? <MenuOutlined /> : undefined}
        style={{
          margin: "10px 0 20px 0",
          color: colors.grey[100],
        }}
      >
        {
          !collapsed && (
              <Box display='flex'
                  justifyContent='space-between'
                  alignItems='center'
                   ml='15px'
              >
                  <Typography variant='h3' color={colors.grey[100]}>
                      ADMINS
                  </Typography>
                  <IconButton>
                      <MenuOutlined/>
                  </IconButton>
              </Box>
          )
        }


      </MenuItem>

     
      {!collapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={logo}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  ADMIN
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  ADMIN PANEl
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={collapsed ? undefined : "10%"}>

          <Link  to="/">
          <Item
              title="Dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Link>
            

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <Link to="/team">
            <Item
              title="Manage Team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>

            <Link to='/contacts'>
              <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
               setSelected={setSelected}
             />
       
            </Link>
            
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>

            <Link to='/form'>
            <Item
              title="Profile Form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
           
            <Link to="/faq">
             <Item
              title="FAQ Page"   
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
            
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>

            <Link to="/bar">
             <Item
                title="Bar Chart" 
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>
        

            <Link to="/pie">
            <Item
              title="Pie Chart"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
            

            <Link  to="/line">
             <Item
              title="Line Chart"  
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
             />
            </Link>

            
            <Link to='/geo'>
             <Item
              title="Geography Chart"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
            
          </Box>


     
    </Menu>
  </Sidebar>



  
  );
}

export default Sidebarr;
const Item = ({ title, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
        
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>

    </MenuItem>
  );
};