import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ListProduct from "./components/list-product";
import CreatePerson from "./components/create-person";
import CreateProduct from "./components/create-product";
import EditProduct from "./components/edit-product";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" component={ListProduct} />
        <Route path="/person/create" exact component={CreatePerson} />
        <Route path="/product/create" component={CreateProduct} />
        <Route path="/product/update" component={EditProduct} />
      </div>
    </Router>
  );
}

export default App;
