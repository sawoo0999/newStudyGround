import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { plus } from "./../store/cartSlice";
import { useParams } from "react-router-dom";
function Cart() {
  let state = useSelector((state) => {
    return state;
  });

  let dispatch = useDispatch();

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.data.map((a, i) => (
            <tr>
              <td>1</td>
              <td>{state.data[i].name}</td>
              <td>{state.data[i].count}</td>
              <td>안녕</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(plus());
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
