import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "#DBDBDB solid 1px",
    width: "350px",
    textAlign: "center",
    backgroundColor: "white",
    margin: "0 auto",
  },
  header: {
    padding: "10px 0px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  textInput: {
    marginBottom: "5px",
    backgroundColor: "#FAFAFA",
    width: "268px",
    fontSize: "10px",
  },
  button: {
    marginTop: "10px",
    width: "268px",
  },

  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "13px",
    paddingBottom: "30px",
  },

  divider: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0px",
  },

  line: {
    height: "0px",
    width: "100px",
    border: "#DBDBDB solid 1px",
  },

  divideText: {
    color: "#8E8E8E",
    padding: "0px 15px",
  },
});

export default useStyles;
