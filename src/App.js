import './App.css';
import './reset.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from "./pages/home";
import Detail from "./pages/detail";
import { Offline } from 'react-detect-offline'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/pokemon/:name' component={Detail}></Route>
      </Switch>
      <Offline>
        <div className="page">
          <div className="offline-info">Anda sedang offline</div>
        </div>
      </Offline>
    </Router>
  );
}

export default App;
