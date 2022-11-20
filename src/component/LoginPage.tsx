import axios from "axios";
import React, { useState } from "react";
import { BASE_URI } from "../utill/apis";
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

  // 실제 학번 비밀번호 백으로 보내서 로그인 여부 확인
  const login = async () => {
    console.log(studentId, pw);
    await axios
      .post(`${BASE_URI}/user/login`, {
        params: { userId: studentId, pw: pw },
      })
      .then((value) => {
        console.log(value.data);
        const data = value.data;
        if (data.type === "student") {
          const tmp: UserData = {
            userId: data.userId,
            type: "student",
            year: "3",
            name: data.name,
            email: data.email, // 이메일
            applicated: data.applicated, // 신청한 과목의 키번호
          };
          setUserData(tmp);
        } else {
          const tmp: UserData = {
            userId: value.data.userId,
            type: "admin",
          };
          setUserData(tmp);
        }
        setLogined(true);
        alert("로그인에 성공했습니다!");
      })
      .catch((err) => {
        console.log(err);
        alert("학번이나 비밀번호를 잘못 입력하였습니다.");
      });
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
      <button onClick={login}>{`로그인`}</button>
      <h6>{`${studentId}, ${pw}`}</h6>
    </>
  );
};

export default Login;
