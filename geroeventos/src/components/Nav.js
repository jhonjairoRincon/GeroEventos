import React from 'react'
import { makeStyles } from '@material-ui/core/styles';//importamos makeStyles
import theme from '../ThemeConfig'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const NavBar = (props) => {
    const useStyles = makeStyles({ //creamos una constante para establecer los estilos 
        root: {
            flexGrow: 1,
           
          },
          menuButton: {
            marginRight: theme.spacing(2),
          },
          title: {
            flexGrow: 1,
            color: props.color
          },
          appBar: {

            position:"static",
            backgroundColor: props.colorb
          }
        
          
    });
   const classes = useStyles(); //creamos una constante y llamamos a los estilos
   const co = props.color
   console.log(co)
    return (
    // relacionamos la clase que se adecuo para esta etiqueta
    <div className={classes.root}>
      <AppBar className={classes.appBar} >
        <Toolbar color="secundary">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} >
            Gero Eventos
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default NavBar
