import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import App from "./App";
import { RouteHandlers } from "./Components";
const { GithubProfile, GithubRepo, InviteRoute, SupportRoute, ToS, Privacy } = RouteHandlers;

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/website/" element={<App/>} />
            <Route path="/discord" element={<SupportRoute/>} />
            <Route path="/support" element={<SupportRoute/>} />
            <Route path="/github" element={<GithubProfile/>} />
            <Route path="/repo" element={<GithubRepo/>} />
            <Route path="/invite" element={<InviteRoute/>} />
            <Route path="/tos" element={<ToS/>} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/*" element={<Navigate replace to="/website/" />} />
        </Routes>
    </Router>,
    document.getElementById("root")
);