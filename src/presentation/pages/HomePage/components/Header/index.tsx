import { useState } from 'react';
import {
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  Container,
  Avatar,
  Tooltip,
  IconButton,
  useTheme,
} from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

import { HeaderProps } from "@/types";
import * as Styled from "./styled";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header({avatar, name}: HeaderProps) {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Styled.HeaderWrapper
      position="static"
      enableColorOnDark
    >
      <Container>
        <Toolbar disableGutters>
          <Styled.TypographyLogo>
            My Tipaw
          </Styled.TypographyLogo>
          <Box sx={{ flex: 1 }} display='flex' justifyContent='end' gap='16px'>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }} gap='16px'>
              <Box display='flex' alignItems='center' gap='8px'>
                <Typography color={theme.palette.primary.main} >Fr</Typography>
                <Styled.CircleIconWrapper fontSize='small' />
                <Typography>NI</Typography>
              </Box>
              <IconButton>
                <NotificationsOutlinedIcon fontSize='small' />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }} gap='16px'>
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
                <MenuItem>
                  <Typography textAlign="center">Langauage</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">Notification</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Box display='flex' alignItems='center' gap='8px'>
              <Avatar alt="Remy Sharp" src={avatar} />
              <Typography noWrap>{name}</Typography>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu}>
                  <KeyboardArrowDownIcon fontSize='small' />
                </IconButton>
              </Tooltip>
            </Box>
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
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </Styled.HeaderWrapper>
  );
}
export default Header;
