import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "#DBDBDB solid 1px",
    width: "350px",
    textAlign: "center",
    backgroundColor: "white",
    margin: "0 auto",
    height: "70px",
  },
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "13px",
  },
  text: {
    fontSize: "13px",
    paddingRight: "5px",
  },
});

export default useStyles;
