import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail(props) {
  let { id } = useParams();
  let newid = props.shoes.find((a) => {
    return a.id == id;
  });
  console.log(newid);
  return (
    <div className="container">
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
