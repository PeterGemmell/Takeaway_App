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
  const AppContext = useContext(AppContext);
}


export default () => {
  return <h1>Sign Up</h1>;
};
