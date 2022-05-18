import { Route, Switch } from "react-router-dom";
import About from "./Componets/About/About";
import Contact from "./Componets/Contact/Contact";
import Departments from "./Componets/Departments/Departments";
import Doctors from "./Componets/Doctors/Doctors";
import Footer from "./Componets/Header/Footer/Footer";
import Header from "./Componets/Header/Header";
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
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
