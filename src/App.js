
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '../src/page/homepage'
import Detail from './page/detail'

function App() {
  return (
    <Router>
    <Switch>
    <Route path="/" exact component={HomePage}>
      </Route>
    <Route path="/:search" exact component={(props) => <HomePage {...props} />}>
      </Route>
      <Route path="/detail/:id/:plat" exact component={(props) => <Detail {...props} />}>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
