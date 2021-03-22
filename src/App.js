import Header from './components/Header.js';
import TaskBoard from './pages/TaskBoard.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
function App() {
  return (
    <main className="App">
      <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={TaskBoard} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        </Router>
    </main>
  );
}

export default App;
