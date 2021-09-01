import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/index.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Content from "./components/Content";
function App() {
  return (
    
      <>
        <NavBar />
        <Switch>
        <Route exact path='/'>
        <Header />
        </Route>
        <Route exact path='/login'>
          <SignIn />
        </Route>
        <Route exact path='/signup'>
          <SignUp/>
        </Route>
        <Route exact path='/content'>
          <Content/>
        </Route>
        </Switch>
        
      </>
    
  );
}

export default App;
