
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';


function Footer() {
    const useStyle = makeStyles({
        root:{
           backgroundColor: "#00f"

        }
    })

    const classes = useStyle();

    return (
       <div className={classes.root}>
            hola footer
        </div>
    )
}

export default Footer
