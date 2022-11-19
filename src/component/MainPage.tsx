import React, { useState } from "react";
import { UserData } from "../utill/Types";
import AdminPage from "./AdminPage";
import StudentPage from "./StudentPage";

// Props 타입 명시
interface Props {
  setLogined: (value: boolean) => void;
  userData: UserData;
}

// 유저 타입에 따라 각각의 메인페이지로 이동.
const MainPage: React.FC<Props> = ({ setLogined, userData }) => {
  return (
    <>
      {userData.type === "student" ? (
        <StudentPage setLogined={setLogined} userData={userData} />
      ) : (
        <AdminPage setLogined={setLogined} userData={userData} />
      )}
    </>
  );
};

export default MainPage;
