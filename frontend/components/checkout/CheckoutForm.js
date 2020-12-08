import React, { useState, useContext } from "react";
import { FormGroup, Label, Input } from "reactstrap";

import fetch from "isomorphic-fetch";
import Cookies from "js-cookie";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import CardSection from "./CardSection";
import AppContext from "../components/Context/AppContext";
