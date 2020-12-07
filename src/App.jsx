import React from "react";

import "./assets/reset.css";
import "./assets/style.css";

import {Link, Route, 
        useLocation, 
        Switch, BrowserRouter } from "react-router-dom";
import { AnimatePresence} from "framer-motion";

import {Root} from "./page/root";
import {Page1} from "./page/page-1";
import {Page2} from "./page/page-2";
import {NotFound} from "./page/not-found";

const Routes = () => {
  const location = useLocation();
  const [_, rootPath] = location.pathname.split("/");
  return (
    <>
      <header>
        <Link to="/" className="link-nav">root</Link>
        <Link to="/page1" className="link-nav">page1</Link>
        <Link to="/page2" className="link-nav">page2</Link>
      </header>
      
      <AnimatePresence exitBeforeEnter initial={true}>
        <Switch  location={location}  key={rootPath}
        >
          <Route exact path="/" component={Root} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}