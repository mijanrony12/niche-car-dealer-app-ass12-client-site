import { BrowserRouter, Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Homes/Home/Home';
import MoreCar from './pages/MoreCar/MoreCar';
import OrderPlace from './pages/OrderPlace/OrderPlace';

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
                        <Route exact path="/moreCar">
                             <MoreCar></MoreCar>
                        </Route>
                        <Route exact path="/orderPlace">
                             <OrderPlace></OrderPlace>
                        </Route>
                </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
