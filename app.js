// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app= express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res){
  req.send("hello");
});
