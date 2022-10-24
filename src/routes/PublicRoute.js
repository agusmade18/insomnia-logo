//import react router dom
import { Routes, Route } from "react-router-dom";

import Dashboard from '../user/pages/Dashboard';
import Category from "../user/pages/Category";


function PublicRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={ <Dashboard /> } />
            <Route path="/home" exact element={ <Dashboard /> } />
            <Route path="/category" exact element={ <Category /> } />
        </Routes>
) }
export default PublicRoutes