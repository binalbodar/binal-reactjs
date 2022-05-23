import { Route, Switch } from "react-router-dom";
import Footer from "./Componet/Footer/Footer";
import Header from "./Componet/Header/Header";
import About from "./Container/About/About";
import Home from "./Container/Home/Home";
import Prodect from "./Container/Prodect/Prodect";
import Prodectdetail from "./Container/Prodectdetail/Prodectdetail";

function App() {
  return (
    <>
      <Header/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/about"} component={About}/>
                <Route exact path={"/prodect"} component={Prodect}/>
                <Route exact path={"/prodectdetail"} component={Prodectdetail}/>
            </Switch>
      <Footer/>
    </>
  );
}

export default App;
