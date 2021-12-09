import './App.scss';
import { Route, Switch, Link, HashRouter as Router} from 'react-router-dom';

import Lobby from "./page/lobby.js"
import Pathfind_page from "./page/path_find.js"

function App() {
  return (
      <Router>
      <div id="app">
        <Route exact path="/path-find" component={Pathfind_page} />
        <Route exact path="/" component={Lobby} />
      </div>
    </Router>
  );
}

export default App;
