import React, { useState, useEffect } from "react";
import "./components/student_card";
import { getStudents } from "./apis/students";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Students from "./views/students";
import Student from "./views/student";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    let mounted = true;
    getStudents().then((students) => {
      if (mounted) setStudents(students);
    });
    return () => (mounted = false);
  }, []);

  return (
    <Router>
      <div className="main-container">
        <nav className={"flex justify-between bg-black p-2"}>
          <Link to={"/users"} className={"btn btn-info"}>
            Users
          </Link>
        </nav>
        <Switch>
          <Route path="/users/:id" exact>
            <Student/>
          </Route>
          <Route path="/">
            <Students students={students}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
