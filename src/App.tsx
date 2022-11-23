import React, { useState } from "react";
import "./App.css";
import LoginPage from "./component/LoginPage";
import MainPage from "./component/MainPage";
import { NullStudent, NullUser } from "./utill/types";

function App() {
  const [logined, setLogined] = useState(false);
  const [userData, setUserData] = useState(NullStudent);
  const [adminData, setAdminData] = useState(NullUser);

  return (
    <div>
      {!logined ? (
        <LoginPage
          setLogined={setLogined}
          setUserData={setUserData}
          setAdminData={setAdminData}
        />
      ) : (
        <MainPage
          setLogined={setLogined}
          userData={userData}
          adminData={adminData}
          setUserData={setUserData}
        />
      )}
    </div>
  );
}

export default App;
