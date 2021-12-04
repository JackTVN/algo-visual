import './App.scss';
import { Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom';

import Lobby from "./page/lobby.js"
import Pathfind_page from "./page/path_find.js"

function App() {
  return (
      <Router>
      <div id="app">
        <Route exact path="/" component={Lobby} />
        <Route exact path="/path_find" component={Pathfind_page} />
      </div>
    </Router>
  );
}

export default App;
