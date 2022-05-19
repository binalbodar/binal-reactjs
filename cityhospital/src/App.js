import { Route, Switch } from "react-router-dom";
import Footer from "./Componets/Header/Footer/Footer";
import Header from "./Componets/Header/Header";
import About from "./Container/About/About";
import Auth from "./Container/Auth/Auth";
import Contact from "./Container/Contact/Contact";
import Departments from "./Container/Departments/Departments";
import Doctors from "./Container/Doctors/Doctors";
import Home from "./Container/Home/Home";

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path={"/"} component={Home}/>
      <Route exact path={"/departments"} component={Departments}/>
      <Route exact path={"/doctors"} component={Doctors}/>
      <Route exact path={"/about"} component={About}/>
      <Route exact path={"/contact"} component={Contact}/>
      <Route exact path={"/auth"} component={Auth}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
