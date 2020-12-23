
import Home from './pages/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Detail from './pages/Detail';
import List from './pages/List';
import Nav from './components/Nav';

function App() {


  return (
    <Router>
      <Switch>
      <Route path="/detail/:id" exact  component={Detail}/>
      <Route path="/" exact component={Home}/>
      <Route path="/:type"  component={List}/>
      </Switch>
    </Router>
  );
}

export default App;
