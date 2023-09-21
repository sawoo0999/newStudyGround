import { Alert } from "bootstrap";
import { lazy, useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { addItem } from "./../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
function Detail(props) {
  useEffect(() => {
    setTimeout(() => {
      // let alert = document.querySelector(".alert");
      // alert.style.display = "none";
      setalert(false);
    }, 2000);
  }, []);
  // useEffect(() => {
  //   let b = setTimeout(() => {
  //     setfade("end");
  //   }, 500);
  //   return () => {
  //     clearTimeout(b);
  //     setfade("");
  //   };
  // }, []);

  let [alert1, setalert] = useState(true);
  let { id } = useParams();
  let newid = props.shoes.find((a) => {
    return a.id == id;
  });
  let [tab, settab] = useState(0);
  let [fade, setfade] = useState("");
  let dispatch = useDispatch();

  useEffect(() => {
    let change = JSON.parse(localStorage.getItem("watched"));
    change.push({ id: newid.id, title: newid.title, price: newid.price });
    const arr = [...new Set(change.map(JSON.stringify))].map(JSON.parse);
    localStorage.setItem("watched", JSON.stringify(arr));
  }, []);
  return (
    <div className="container">
      {alert1 == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6 detail-img">
          <img src={props.img[id]} />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{newid.title}</h4>
          <p>{newid.content}</p>
          <p>{newid.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() =>
              dispatch(addItem({ id: newid.id, name: newid.title, count: 1 }))
            }
          >
            주문하기
          </button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              settab(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              settab(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              settab(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabConent tab={tab} />
    </div>
  );
}
function TabConent({ tab, shoes }) {
  let [ani, setani] = useState("");
  useEffect(() => {
    let a = setTimeout(() => {
      setani("end");
    }, 500);

    return () => {
      clearTimeout(a);
      setani("");
    };
  }, [tab]);

  if (tab == 0) {
    return <div className={"start " + ani}>내용</div>;
  } else if (tab == 1) {
    return <div className={"start " + ani}>내용2</div>;
  } else {
    return <div className={"start " + ani}>내용3</div>;
  }
}

export default Detail;
