// import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import data from "./data.js";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Detail } from "./detail.js";

function App() {
  let [shoes] = useState(data);
  let [img, setimg] = useState([
    "https://codingapple1.github.io/shop/shoes1.jpg",
    "https://codingapple1.github.io/shop/shoes2.jpg",
    "https://codingapple1.github.io/shop/shoes3.jpg",
  ]);
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="shop-link">
              Home
            </Link>
            <Link to="/detail" className="shop-link">
              Detail
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Shoewshop shoes={shoes[i]} img={img[i]} />;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

function Shoewshop(props) {
  return (
    <div className="col-md-4">
      <img src={props.img} className="main-img" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>가격 : {props.shoes.price}</p>
    </div>
  );
}

export default App;
