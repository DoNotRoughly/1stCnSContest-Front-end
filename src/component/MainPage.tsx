import React from "react";
import { NullStudent, StudentData, UserData } from "../utill/types";
import AdminPage from "./AdminPage";
import StudentPage from "./StudentPage";

// Props 타입 명시
interface Props {
  setLogined: (value: boolean) => void;
  userData: StudentData;
  adminData: UserData;
  setUserData: (value: StudentData) => void;
}

// 유저 타입에 따라 각각의 메인페이지로 이동.
const MainPage: React.FC<Props> = ({
  setLogined,
  userData,
  adminData,
  setUserData,
}) => {
  return (
    <>
      {userData.type === "student" ? (
        <StudentPage
          setLogined={setLogined}
          userData={userData}
          setUserData={setUserData}
        />
      ) : adminData.type === "admin" ? (
        <AdminPage setLogined={setLogined} />
      ) : (
        <>
          <h1>잘못된 접근입니다!</h1>
          <button
            onClick={() => {
              setUserData(NullStudent);
              setLogined(false);
            }}
          >{`돌아가기`}</button>
        </>
      )}
    </>
  );
};

export default MainPage;
