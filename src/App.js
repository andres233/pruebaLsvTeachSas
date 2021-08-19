import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
// import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";


import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route
                        path="/signup"
                        render={(props) => <RegisterPage {...props} />}
                    />
                    <Route
                        path="/profile-page"
                        render={(props) => <ProfilePage {...props} />}
                    />
                    <Redirect from="/" to="/signup" />
                </Switch>
            </HashRouter>
        </div>

    );
}
export default App;