import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Home/Header/Header";
import Footer from "./Component/Home/Footer/Footer";
import Items from "./Component/Pages/Items/Items";
import AuthProvider from "./contexts/AuthProvider";
import Login from "./Component/Pages/Login/Login";
import { Placeholder } from "react-bootstrap";
import PrivateRoute from './PrivateRoute/PrivateRoute'
import OrderDetails from "./Component/Pages/PlaceOrder/OrderDetails";
import NotFound from "./Component/NotGound/NotFound";
import MyOrder from "./Component/Pages/MyOrder/MyOrder";
import Restaurent from "./Component/Pages/Restaurent/Restaurent";
import Contact from "./Component/Pages/Contac/Contact";
import ManageOrder from "./ManageOrder/ManageOrder";
import AddItem from "./AddItem/AddItem";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Items></Items>
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <Header></Header>
            <Items></Items>
            <Footer></Footer>
          </Route>
          <Route path="/items">
            <Header></Header>
            <Items></Items>
            <Footer></Footer>
          </Route>
          <Route path="/contact">
            <Header></Header>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route path="/restaurent">
            <Header></Header>
            <Restaurent></Restaurent>
            <Footer></Footer>
          </Route>
          <PrivateRoute path="/placeorder/:itemsId">
            <Header></Header>
            <OrderDetails></OrderDetails>
            <Footer></Footer>
          </PrivateRoute>
          <Route path="/myorder">
            <Header></Header>
            <MyOrder></MyOrder>
            <Footer></Footer>
          </Route>
          <Route path="/addItems">
            <Header></Header>
            <AddItem></AddItem>
            <Footer></Footer>
          </Route>
          <Route path="/manageorder">
            <Header></Header>
            <ManageOrder></ManageOrder>
            <Footer></Footer>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
