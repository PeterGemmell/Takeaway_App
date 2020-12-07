/* pages/register.js */
import React, { useState, useContext } from "react";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { registerUser} from "../lib/auth";
import AppContext from "../Context/AppContext";

const Register = () => {
  const [data, setData] = useState({ email: "", username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const appContext = useContext(AppContext);
  return (
    <Container>
    <Row>
    <Col sm="12" md={{ size: 5, offset: 3 }}>
    <div className="paper">
    <div className="header">
    <img src="https://strapi.io/assets/images/logo.png" />
    </div>
    <section className="wrapper">
    {Object.entries(error).length !== 0 &&
    error.constructor === Object &&
    error.message.map((error) => {
      return (
        <div
        key={error.messages[0].id}
        style={{ marginBottom: 10 }}
        >
        <small style={{ color: "red" }}>
        {error.messages[0].message}
        </small>
        </div>
      );
    })}
    <Form>
    <fieldset disabled={loading}>
    <FormGroup>
    <Label>Username:</Label>
    <Input
    disabled={loading}
    onChange={(e) =>
     setData({ ...data, username: e.target.value })
   }
   value={data.username}
   type="text"
   name="username"
   style={{ height: 50, fontSize: "1.2em"}}
   />
   </FormGroup>
   <FormGroup>
   <Label>Email:</Label>
   <Input
   onChange={(e) =>
    setData({ ...data, email: e.target.value })
   }
   value={data.email}
   type="email"
   name="email"
   style={{ height: 50, fontSize: "1.2em" }}
   />
   </FormGroup>
   <FormGroup style={{ marginBottom: 30 }}>
   <Label>Password:</Label>
   <Input
   onChange={(e) =>
    setData({ ...data, password: e.target.value })
   }
   value={data.password}
   type="password"
   name="password"
   style={{ height: 50, fontSize: "1.2em" }}
   />
   </FormGroup>
   <FormGroup>
   <span>
    <a href="">
    <small>Forgot Password?</small>
    </a>
    </span>
    <Button
    style={{ float: "right", width: 120 }}
    color="primary"
    disabled={loading}
    onClick={() => {
      setLoading(true);
      registerUser(data.username, data.email, data.password)
      .then((res) => {
      // set authed user in global context object
      appContext.setUser(res.data.user);
      setLoading(false);
      })
      .catch((error) => {
        setError(error.response.data);
        setLoading(false);
      });
    }}
    >
    {loading ? "Loading.." : "Submit"}
    </Button>
    </FormGroup>
    </fieldset>
  </Form>
  </section>
  </div>
  </Col>
 </Row>
 <style jsx>
  {`
    `}
  )
}


export default () => {
  return <h1>Sign Up</h1>;
};
