import React from 'react';
import headerLogoPng from './logo.png';
import './Header.sass';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Home, PostAdd, Code } from '@material-ui/icons';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="Header">
      <div className="cBox">
        <div className="Header-col">
          <Link to="/" className="Header-logoLink">
            <img src={headerLogoPng} className="Header-logo" alt="Header-logo" />
            <div className="Header-logoLabel">React Info Board</div>
          </Link>
        </div>
        <div className="Header-col">
          <Button
            variant="contained"
            color="primary"
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
            <MenuItem onClick={handleClose} to="/" component={Link}>
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
            <MenuItem onClick={handleClose} to="/notepad" component={Link}>
              <ListItemIcon>
                <Code fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Notepad" />
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
