import React, { Component } from "react";
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProject from './components/Project/AddProject'; 
import { Provider } from "react-redux";
import store from "./store";
import UpdateProject from "./components/Project/UpdateProject";
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";
import AddProjectTask from "./components/ProjectBoard/ProjectTasks/AddProjectTask";
import UpdateProjectTask from "./components/ProjectBoard/ProjectTasks/UpdateProjectTask";
import RecommenComponent from "./components/Recommendation";
import Team from "./components/TeanBoard/Team";
import Navbar from "./components/Layout/Navbar";
import Profile from "./components/Profile";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import AuthenticatedRouter from "./components/UserManagement/AuthenticatedRoute";
import Member from "./components/Member";
import AddMember from "./components/Member/AddMember";

class App extends Component {
  render(){
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Navbar/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>


        <AuthenticatedRouter exact path="/dashboard" component={Dashboard} />
        <Route exact path="/recommendation" component={RecommenComponent} />
        <Route exact path="/addProject" component={AddProject} />
        <Route exact path="/members/:id" component={Member} />
        <Route exact path="/members/:id/addMember" component={AddMember} />
        <Route exact path="/updateProject/:id" component={UpdateProject} />
        <Route exact path="/projectBoard/:id" component={ProjectBoard} />
        <Route exact path="/profile/:name" component={Profile} />
        
           <Route
              exact
              path="/addProjectTask/:id"
              component={AddProjectTask}
            />
            <Route
              exact
              path="/updateProjectTask/:backlog_id/:pt_id"
              component={UpdateProjectTask}
            />
      </div>
    </Router>
  </Provider>
  );
}
}

export default App;
