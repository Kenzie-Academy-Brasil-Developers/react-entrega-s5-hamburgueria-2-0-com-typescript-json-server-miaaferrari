import { Switch, Route } from "react-router-dom";
import {Home} from "../pages/Home";
import { Cadastro } from "../pages/Cadastro";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/DashBoard";

export const Routes = () => {
  return (
   
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route exact path="/cadastro">
         <Cadastro />
       </Route>
       <Route exact path="/login">
         <Login />
       </Route>
       <Route exact path='/dashboard'>
         <Dashboard />
       </Route>
     </Switch>
  );
};
