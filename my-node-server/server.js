const express = require("express");
// import express from "express"

const app = express();
const PORT = 3000;

app.use(express.json()); // middleware

/* 
    CRUD operations
        C - create
        R read
        U udpated
        D delelete


    http request methods
        POST - create
        GET - read
        PUT/PATCH - update
        DELETE - delete


    http status codes
    2 : success
        200
        201
        203
        204

    3: redirection
        304
        308
    
    4:  (client/react side error)
        400  -- bad request
        401  -- unauthenticated // not logged in 
        403  -- unatuthorized  
        404  -- route not found
        405  -- route matched but request method 
        422  -- unprocessable entity : similar to 400
        429  -- DDOS attack , rate limit 

    5: server side error
        500 :  server errror : unable to handle codes properly
        503 :  gateway error 
        504
  */

app.get("/", (req, res) => {
  res.send("welcome to node-api");
});

app.get("/api/todos", (req, res) => {
  let todos = [
    { title: "html", status: false },
    { title: "css", status: false },
  ];
  res.send(todos);
});

let products = [
  {
    title: "mouse",
    price: 100,
  },
];

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.post("/api/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.send("product created");
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
