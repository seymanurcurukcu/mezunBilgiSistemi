import { makeStyles } from "@material-ui/core";
import { blueGrey} from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    background: "#5e5e5e"
  },
  logo: {
    color: "white",
    display:"flex"
  },
  navlist: {
    minWidth: "250px",
    maxWidth: "300px",
  },
  ulAvater: {
    backgroundColor: blue["A200"],
    color: "white",
  },
  navAvatar: {
    width: "40px",
    height: "40px",
  },


  wrapper: {
    minHeight: "100vh",
    height: "auto",
    background: "#efefef",
    marginTop: "60px",
    padding: theme.spacing(2, 2, 0, 34),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 2),
      marginTop: "45px",
    },
  },

  //Side nav
  drawerPaper: {
    width: "250px",
 height:"600px",

    marginTop: "65px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
      height:"1000px",
    },
  },
  navlinks: {
   
    color: "black",
    
    "& :hover , &:hover div": {
      color: "black",
      textDecoration:"nano",
    },
    " & div": {
      color: blueGrey["A400"],
      
    },
  },
  activeNavlinks: {
    

    color: "black",
    "& div": {
      color: "black",
      
    },
  },
  navButton: {
    width: " 100%",
    textTransform: "capitalize",
  },
}));
