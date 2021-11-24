import React from "react";
import { Form, Button, Card} from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";
import './Login.css'

const Login = () => {
    const { signInUsingGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result => {
          history.push(redirect_uri);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
      }

  return (
    <div className="mx-auto d-flex justify-content-center align-items-center mt-5">
      <Card className="p-5 m-5 card-box">
      <Form>
        <h1 className="mb-4 text-info">Please Login!</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="info" className="text-light" type="submit">
          Submit
        </Button>
        <br />
        <br />
        <Button onClick={handleGoogleLogin} className="bg-info border-0 mb-3">Google SignIn</Button>
        <br />
        <Link to="/home" className="">Go Back Home</Link>
      </Form>
      </Card>
    </div>
  );
};

export default Login;
