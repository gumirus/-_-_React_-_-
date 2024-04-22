import {BrowserRouter, Switch, Route} from "react-router-dom";
import { routes } from "./routes";

export const Router = () => {
  const mappedRoutes = Object.entries(routes).map(([path, Component]) => {
    return (
      <Route key={path} path = {path}>
        <Component/>
      </Route>
    )
  })
  return (
    <BrowserRouter>
      <Switch>
        {mappedRoutes}
      </Switch>  
    </BrowserRouter>
  )
}