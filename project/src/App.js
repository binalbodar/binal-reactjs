import { Route, Switch } from "react-router-dom";
import Footer from "./Componet/Footer/Footer";
import Header from "./Componet/Header/Header";
import Home from "./Container/Home/Home";

function App() {
  return (
    <>
      <Header/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
            </Switch>
      <Footer/>
    </>
  );
}

export default App;
