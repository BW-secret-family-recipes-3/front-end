// third party imports
import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// local imports
import ViewRecipes from './ViewRecipes';
import AddRecipe from './AddRecipe';
import DashboardHeader from './DashboardHeader';


function Dashboard(props){
    return(
        <div>
            <h2>Dashboard</h2>
            <DashboardHeader/>
            {/* Dashboard component goes here*/}
            <Router>
                <Switch>
                    <Route exact path = "/user/dashboard/viewrecipes" component = {ViewRecipes}/>
                    <Route exact path = "/user/dashboard/addrecipe" component = {AddRecipe}/>
                </Switch>
            </Router>
        </div>
    );
};

export default Dashboard;