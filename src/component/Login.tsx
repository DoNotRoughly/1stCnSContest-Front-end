import React, { useState } from "react";
import { UserData } from "../utill/Types";

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
    if (true || (studentId === "201802130" && pw === "990915")) {
      setUserData({
        type: "student", // 학생인지 관리자인지, "student" or "admin"
        id: "201802130", // 학번
        year: "3", // 학년
        name: "이시형", // 이름
        email: "dcd124012@gmail.com", // 이메일
        applicated: [], // 신청한 과목 리스트
      });
      setLogined(true);
    } else {
      alert("아이디 또는 비밀번호를 잘못 입력했습니다.");
    }
  };

  return (
    <>
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
        type="password"
        value={pw}
        onChange={(event) => {
          setPw(event.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={testLoginMechanism}>제출</button>
      <h6>{`${studentId}, ${pw}`}</h6>
    </>
  );
};

export default Login;
