import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import "./index.html";
import { AppComponent } from "./components/app-component";
import { DetailComponent } from "./components/detail-component";

render(
    <Router history={browserHistory}>
        <Route path="/detail" component={DetailComponent}/>        
        <Route path="/" component={AppComponent}/>
    </Router>,
    document.getElementById('app-component')
);