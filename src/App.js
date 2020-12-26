import { CssBaseline, makeStyles } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

const useStyle = makeStyles({
  appMain:{
    paddingLeft: '320px',
    width: '100%'
  }
});

function App() {

  const classes = useStyle();

  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
