import { Route, Switch } from "react-router-dom";
import Footer from "./Componets/Header/Footer/Footer";
import Header from "./Componets/Header/Header";
import About from "./Container/About/About";
import Contact from "./Container/Contact/Contact";
import Departments from "./Container/Departments/Departments";
import Doctors from "./Container/Doctors/Doctors";
import Home from "./Container/Home/Home";
import Login from "./Container/Login/Login";
import Medicine from "./Container/Medicine/Medicine";
import PrivateRoute from "./Route/PrivateRoute";
import PublicRoute from "./Route/PublicRoute";

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <PublicRoute exact path={"/"} component={Home}/>
      <PublicRoute exact path={"/departments"} component={Departments}/>
      <PrivateRoute exact path={"/doctors"} component={Doctors}/>
      <PublicRoute exact path={"/about"} component={About}/>
      <PublicRoute exact path={"/contact"} component={Contact}/>
      <PublicRoute restricted={true} exact path={"/login"} component={Login}/>
      <Route exact path={"/medicine"} component={Medicine}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
