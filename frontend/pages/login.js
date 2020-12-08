/* pages/login.js */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
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
import { login } from "../lib/auth";
import AppContext from "../components/Context/AppContext";

function Login(props) {
  const [data, updateData] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const appContext = useContext(AppContext);

  useEffect(() => {
    if (appContext.isAuthenticated){
      router.push("/"); // redirect if you're already logged in
    }
  }, []);

  function onChange(event) {
    updateData({ ...data, [event.target.name]: event.target.value });
  }

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
    <Label>Email:</Label>
    <Input
    onChange={(event) => onChange(event)}
    name="identifier"
    style={{ height: 50, fontSize: "1.2em" }}
    />
    </FormGroup>
    <FormGroup style={{ marginBottom: 30 }}>
    <Label>Password:</Label>
    <Input
    onChange={(event) => onChange(event)}
    type="password"
    name="password"
    style={{ height: 50, fontSize: "1.2em" }}
    />
    </FormGroup>
  )
}







export default () => {
  return <h1> Sign In</h1>;
};
