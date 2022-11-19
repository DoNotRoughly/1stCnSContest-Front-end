import React, { useState } from "react";
import { dummyAdmin, dummyStudent } from "../utill/dummies";
import { UserData } from "../utill/types";

// Props 타입 명시
interface Props {
  setLogined: (value: boolean) => void;
  setUserData: (value: UserData) => void;
}

// Login 페이지 렌더링
const Login: React.FC<Props> = ({ setLogined, setUserData }) => {
  const [studentId, setStudentId] = useState("");
  const [pw, setPw] = useState("");

  const testLoginMechanism = () => {
    if (studentId === "200000000" && pw === "000000") {
      setUserData(dummyAdmin);
      setLogined(true);
    } else if (
      (studentId === "" && pw === "") ||
      (studentId === "201802130" && pw === "990915")
    ) {
      setUserData(dummyStudent);
      setLogined(true);
    } else {
      alert("아이디 또는 비밀번호를 잘못 입력했습니다.");
    }
  };

  return (
    <>
      <h1>로그인</h1>
      <label>학번: </label>
      <input
        type="text"
        value={studentId}
        onChange={(event) => {
          setStudentId(event.target.value);
        }}
      />
      <br />
      <br />
      <label>비밀번호: </label>
      <input
        type="text" // 원래 password
        value={pw}
        onChange={(event) => {
          setPw(event.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={testLoginMechanism}>{`로그인`}</button>
      <h6>{`${studentId}, ${pw}`}</h6>
    </>
  );
};

export default Login;
