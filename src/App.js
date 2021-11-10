import { BrowserRouter, Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Homes/Home/Home';
import MoreCar from './pages/MoreCar/MoreCar';
import OrderPlace from './pages/OrderPlace/OrderPlace';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Login from './pages/LoginPage/Login/Login';
import Register from './pages/LoginPage/Register/Register';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>
            <AuthProvider>
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
                              <Route exact path="/login">
                                   <Login></Login>
                              </Route>
                              <Route exact path="/register">
                                   <Register></Register>
                              </Route>
                              <Route path="*">
                                   <ErrorPage></ErrorPage>
                              </Route>
                         </Switch>
                </BrowserRouter>
          </AuthProvider>
    </div>
  );
}

export default App;
