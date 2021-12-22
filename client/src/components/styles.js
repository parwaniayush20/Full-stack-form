import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles((theme) =>({
    container:{
        backgroundColor:theme.palette.background.paper,
        padding:"30px 0"
    },
    icon:{
        marginRight:"15px",
    },
}));

export default useStyles;