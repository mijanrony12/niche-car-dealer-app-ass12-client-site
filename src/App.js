import { BrowserRouter, Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Homes/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      
                <Switch>
                        <Route exact path="/">
                             <Home></Home>
                        </Route>
                        <Route exact path="/home">
                             <Home></Home>
                        </Route>
                </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
