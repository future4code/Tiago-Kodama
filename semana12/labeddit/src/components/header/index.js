import React, { useContext, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { StyledToobar } from './styled'
import { useHistory } from 'react-router-dom';
import { goToLogin } from "../../routers/coordenator"
import GlobalContext from "../../global/GlobalContext"

export default function Header() {
    const { states, setters } = useContext(GlobalContext)

    const history = useHistory()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLog = () => {
        if(states.token){
            window.localStorage.setItem('token', '')
            setters.setToken('')
        } 
        
        goToLogin(history)
        handleClose()
    }


    return (
            <AppBar position="static" color='secondary'>
                <StyledToobar>
                    <Typography variant="h5" color='primary'>
                        <strong>Labeddit</strong>
                    </Typography>
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color={states.token? 'primary':'white'}
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => alert('profile')}>Profile</MenuItem>
                            <MenuItem onClick={() => alert('My account')}>My account</MenuItem>
                            <MenuItem onClick={handleLog}>{states.token? 'Logout':'Login'}</MenuItem>
                        </Menu>
                    </div>
                </StyledToobar>
            </AppBar>
    );
}