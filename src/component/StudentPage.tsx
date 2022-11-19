import React, { useState } from "react";
import { UserData } from "../utill/Types";

// Props 타입 명시
interface Props {
  setLogined: (value: boolean) => void;
  userData: UserData;
}

const StudentPage: React.FC<Props> = ({ setLogined, userData }) => {
  return (
    <>
      <h1>응애 학생</h1>
      <button onClick={() => setLogined(false)}>돌아가기</button>
    </>
  );
};

export default StudentPage;
