import { Route, Routes, useNavigate, Outlet } from "react-router-dom";
import "./App.css";
import Id from "./Routes/id.js";
import Detail from "./Routes/detail";
import Spinner from "./Routes/spinner";
import { useEffect, useState } from "react";
import Story from "./Routes/story";

function App() {
  useEffect(() => {
    localStorage.setItem("ID", "sawoo0999@naver.com");
    localStorage.setItem("Password", "123456");
    setTimeout(() => {
      setloding(false);
    }, 1000);
  }, []);
  let navigate = useNavigate();
  let [loding, setloding] = useState(true);
  console.log(loding);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={loding ? <Spinner /> : <Id navigate={navigate} />}
        />
        <Route path="/detail" element={loding ? <Spinner /> : <Detail />} />
        <Route path="/story" element={loding ? <Spinner /> : <Story />} />
      </Routes>
    </div>
  );
}

export default App;
