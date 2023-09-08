import { Alert } from "bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  useEffect(() => {
    setTimeout(() => {
      // let alert = document.querySelector(".alert");
      // alert.style.display = "none";
      setalert(false);
    }, 2000);
  }, []);

  let [alert1, setalert] = useState(true);
  let { id } = useParams();
  let newid = props.shoes.find((a) => {
    return a.id == id;
  });

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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
