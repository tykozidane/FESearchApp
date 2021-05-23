
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '../src/page/homepage'
import Kategori from '../src/page/kategori'

function App() {
  return (
    <Router>
    <Switch>
    <Route path="/" exact component={HomePage}>
      </Route>
      <Route path="/kategoriin" exact component={Kategori}>
      </Route>
    <Route path="/:search" exact component={(props) => <HomePage {...props} />}>
      </Route>
      <Route path="/kategori/:search" exact component={(props) => <Kategori {...props} />}>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
