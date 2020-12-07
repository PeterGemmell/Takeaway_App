import { useEffect } from "react";
import Router from "next/router";
import Cookie from "js-cookie";
import axios from "axios";


const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

// Here we register a new User.
export const registerUser = (username, email, password) => {
  // prevent function from being ran on the server
  if (typeof window === "undefined") {
    return;
  }
  return new Promise((resolve, reject) => {
    axios
    .post(`${API_URL}/auth/local/register`, { username, email, password })
    .then((res) => {
      // set token response from Strapi for server validation
      Cookie.set("token", res.data.jwt);

      // resolve the promise to set loading to false in SignUp form
      resolve(res);
      // redirect back to home page for restaurant selection
      Router.push("/");
    })
    .catch((error) => {
      // reject the promise and pass the error object back to the form
      reject(error);
    });
  });
};

export const login = (identifier, password) => {
  // prevent function from being ran on the server
  if (typeof window === "undefined") {
    return;
  }

  return new Promise((resolve, reject) => {
    axios
    .post(`${API_URL}/auth/local/`, { identifier, password })
    .then((res) => {
      // set token response from Strapi for server validation
      Cookie.set("token", res.data.jwt);

      // resolve the promise to set loading to false in SignUp form
      resolve(res);
      // redirect back to home pagefor restaurant selection
    })
  })
}
