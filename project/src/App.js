import { Route, Switch } from "react-router-dom";
import Footer from "./Componet/Footer/Footer";
import Header from "./Componet/Header/Header";
import About from "./Container/About/About";
import Blog from "./Container/Blog/Blog";
import Cart from "./Container/Cart/Cart";
import Confirmation from "./Container/Confirmation/Confirmation";
import Contact from "./Container/Contact/Contact";
import Elements from "./Container/Elements/Elements";
import Home from "./Container/Home/Home";
import Login from "./Container/Login/Login";
import Prodect from "./Container/Prodect/Prodect";
import Prodectchek from "./Container/Prodectchek/Prodectchek";
import Prodectdetail from "./Container/Prodectdetail/Prodectdetail";
import Singalblog from "./Container/Singalblog/Singalblog";

function App() {
  return (
    <>
      <Header/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/about"} component={About}/>
                <Route exact path={"/prodect"} component={Prodect}/>
                <Route exact path={"/prodectdetail"} component={Prodectdetail}/>
                <Route exact path={"/login"} component={Login}/>
                <Route exact path={"/prodectchek"} component={Prodectchek}/>
                <Route exact path={"/cart"} component={Cart}/>
                <Route exact path={"/confirmation"} component={Confirmation}/>
                <Route exact path={"/blog"} component={Blog}/>
                <Route exact path={"/elements"} component={Elements}/>
                <Route exact path={"/singalblog"} component={Singalblog}/>
                <Route exact path={"/contact"} component={Contact}/>
            </Switch>
      <Footer/>
    </>
  );
}

export default App;
