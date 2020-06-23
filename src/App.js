import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import CreatePerson from "./components/create-person";
import CreateProduct from "./components/create-product";
import EditProduct from "./components/edit-product";
import DeleteProduct from "./components/delete-product";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/person/create" exact component={CreatePerson} />
        <Route path="/product/create" component={CreateProduct} />
        <Route path="/product/update" component={EditProduct} />
        <Route path="/product/delete" component={DeleteProduct} />
      </div>
    </Router>
  );
}

export default App;
