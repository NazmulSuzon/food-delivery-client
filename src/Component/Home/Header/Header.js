import React from "react";
import {
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";
import orderFood from "../../../images/icon/order-food.png";
// import icon from "../../../images/icon/foodota-logo-main.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="background-img">
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav>
              <Navbar.Text>
                <div className="nav-component fs-5">
                  <Link to="/home">Home</Link>
                  <Link to="/items">Items</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/restaurent">Restaurent</Link>

                  {user?.email ? (
                    <>
                      <Link to="/myorder">My Orders</Link>
                      <Link to="/manageorder">Manage Orders</Link>
                      <Link to="/addItems">Add Items</Link>
                      <Button onClick={logOut} variant="light">
                        Logout
                      </Button>
                    </>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}

                  <p className="ms-3 mt-2">
                    Signed in as:{" "}
                    <span className="text-info">{user?.displayName}</span>
                  </p>
                </div>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="header-component mt-3 text-end text-light">
        <img className="mb-2" src={orderFood} alt="" />
        <h2 className="fs-1">Order Healthy And Fresh Food</h2>
        <p className="fs-4 mt-4">
          You Can Order Your Favourite Food from Here.
          <br /> Our Food Is Unhygienic, Healthy And Delicious.
        </p>

        <div className="d-flex justify-content-end mt-4">
          <InputGroup className="mb-3 w-50">
            <FormControl
              placeholder="Find Your Favourite Food"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2" className="bg-warning ">
              Search
            </InputGroup.Text>
          </InputGroup>
        </div>
      </Container>
    </div>
  );
};

export default Header;
