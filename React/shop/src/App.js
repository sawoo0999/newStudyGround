// import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import data from "./routes/data";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/detail";
import axios from "axios";

function App() {
  let [shoes, setshoes] = useState(data);
  let [img] = useState([
    "https://codingapple1.github.io/shop/shoes1.jpg",
    "https://codingapple1.github.io/shop/shoes2.jpg",
    "https://codingapple1.github.io/shop/shoes3.jpg",
    "https://codingapple1.github.io/shop/shoes4.jpg",
    "https://codingapple1.github.io/shop/shoes5.jpg",
    "https://codingapple1.github.io/shop/shoes6.jpg",
    "https://codingapple1.github.io/shop/shoes7.jpg",
    "https://codingapple1.github.io/shop/shoes8.jpg",
    "https://codingapple1.github.io/shop/shoes9.jpg",
  ]);
  let navigat = useNavigate();
  let [count, setcount] = useState(0);
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigat("/");
              }}
              className="shop-link"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigat("/detail");
              }}
              className="shop-link"
            >
              Detail
            </Nav.Link>
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
                    return (
                      <Shoewshop
                        shoes={shoes[i]}
                        img={img[i]}
                        navigat={navigat}
                      />
                    );
                  })}
                </div>
              </div>

              <button
                onClick={() => {
                  if (count == 0) {
                    setcount(1);
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((result) => {
                        let copy = [...shoes, ...result.data];
                        setshoes(copy);
                      });
                  } else if (count == 1) {
                    setcount(2);
                    axios
                      .get("https://codingapple1.github.io/shop/data3.json")
                      .then((result1) => {
                        let copy = [...shoes, ...result1.data];
                        console.log(copy);
                        setshoes(copy);
                      });
                  } else {
                    alert("더이상없습니다.");
                  }
                  console.log(count);
                }}
              >
                더보기
              </button>
            </>
          }
        />

        <Route
          path="/detail/:id"
          element={<Detail shoes={shoes} img={img} />}
        />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<About />} />
        </Route>
        <Route path="/event" element={<Sale />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰 받기</p>} />
        </Route>
      </Routes>
    </div>
  );
}

function Sale() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Shoewshop(props) {
  return (
    <div className="col-md-4">
      <img
        onClick={() => {
          props.navigat(`/detail/${props.shoes.id}`);
        }}
        src={props.img}
        className="main-img"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>가격 : {props.shoes.price}</p>
    </div>
  );
}

export default App;
