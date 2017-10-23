import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import StatefulCampuses from './StatefulCampuses';
import SingleCampus from './SingleCampus';
import ManageStudents from './ManageStudents';
import AddStudent from './AddStudent';
import SingleStudent from './SingleStudent';
import ManageCampuses from './ManageCampuses';
import AddCampus from './AddCampus';
import EditStudent from './EditStudent';
import StatefulStudents from './StatefulStudents';

export default class MainPage extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={StatefulCampuses} />
            <Route exact path="/campuses" component={ManageCampuses} />
            <Route exact path="/campuses/:campusId" component={SingleCampus} />
            <Route exact path="/students" component={ManageStudents} />
            <Route path="/students/:id" component={SingleStudent} />
            <Route path="/add-student" component={AddStudent} />
            <Route path="/add-campus" component={AddCampus} />
            <Route path="/edit-student/:id" component={EditStudent} />
            <Route path="/test" component={StatefulStudents} /> {/*test*/}
          </Switch>
        </div>
      </Router>
    );
  }
}
