import './App.css';
import './reset.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/pokemon/:name' component={Detail}></Route>
      </Switch>
    </Router>
  );
}

export default App;
