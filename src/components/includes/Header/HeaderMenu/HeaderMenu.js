import React from 'react';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Home, PostAdd, Archive, Settings } from '@material-ui/icons';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const HeaderMenu = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        size="large"
        color="secondary"
        className="Header-menuTrigger"
        aria-controls="header-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="header-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="Header-menuList"
      >
        <MenuItem exact={'true'} onClick={handleClose} to="/" component={Link}>
          <ListItemIcon>
            <Home fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </MenuItem>
        <MenuItem onClick={handleClose} to="/add-new" component={Link}>
          <ListItemIcon>
            <PostAdd fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Add new issue" />
        </MenuItem>
        <MenuItem onClick={handleClose} to="/archive" component={Link}>
          <ListItemIcon>
            <Archive fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Archive" />
        </MenuItem>
        <MenuItem onClick={handleClose} to="/settings" component={Link}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default HeaderMenu;
