// third party imports
import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// local imports
import ViewRecipes from './ViewRecipes';
import AddRecipe from './AddRecipe';
import DashboardHeader from './DashboardHeader';
import {getUserAction} from '../actions/getUser'


function Dashboard(props){

    const token = localStorage.getItem('token');

    const userId = localStorage.getItem('userId');

    useEffect(() => {
        props.getUserAction({token: token});
    },[token])
    
    return(
        <div>
            <h2>Dashboard</h2>
            
            {/* Dashboard component goes here*/}
            <Router>
                <DashboardHeader/>
                <Switch>
                    <Route exact path = "/user/dashboard/viewrecipes" component = {ViewRecipes}/>
                    <Route exact path = "/user/dashboard/addrecipe" component = {AddRecipe}/>
                </Switch>
            </Router>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        tokenState: state.fetchToken,
        userState: state.user
    };
};

export default connect(mapStateToProps, {getUserAction})(Dashboard);