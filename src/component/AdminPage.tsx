import React, { useState } from "react";
import { UserData } from "../utill/types";

// Props 타입 명시
interface Props {
  setLogined: (value: boolean) => void;
  userData: UserData;
}

const AdminPage: React.FC<Props> = ({ setLogined, userData }) => {
  return (
    <>
      <h1>응애 관리자</h1>
      <button onClick={() => setLogined(false)}>돌아가기</button>
    </>
  );
};

export default AdminPage;
