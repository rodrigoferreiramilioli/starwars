import axios from "axios";
import React, { Component } from "react";

const Personagem = axios.create({
  baseURL: "https://swapi.dev/api/people/"
});
export default Personagem;
