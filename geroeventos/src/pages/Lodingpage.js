import React from 'react'
import { makeStyles } from '@material-ui/core/styles';//importamos makeStyles

const useStyles = makeStyles({ //creamos una constante para establecer los estilos 
    root: {  // ponemos el nombre que relacionamos con los estilos y la classe en la etiqueta a modificar
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
   
    },
});
const Lodingpage = () => {
    
    const classes = useStyles(); //creamos una constante y llamamos a los estilos

    return (
    // relacionamos la clase que se adecuo para esta etiqueta
   <div className={classes.root}>      
            <h1>hola</h1>
        </div>
    )
}

export default Lodingpage
