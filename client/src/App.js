import './App.css';
import { HomePage, EmployeeListPage, EmployeeDetailPage, EmployeeUpdatePage } from "./Components"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/employees" component={EmployeeListPage}></Route>
          <Route exact path="/employees/:id/update" component={EmployeeUpdatePage}></Route>
          <Route exact path="/employees/:id" component={EmployeeDetailPage}></Route>
        </Switch>
        </Router>
      {/* </header> */}
    </div>
  );
}

export default App;
