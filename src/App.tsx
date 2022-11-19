import React, { useState } from "react";
import "./App.css";
import Login from "./component/Login";
import MainPage from "./component/MainPage";
import { EmptyUserData } from "./utill/types";

function App() {
  const [logined, setLogined] = useState(false);
  const [userData, setUserData] = useState(EmptyUserData);

  return (
    <div>
      {!logined ? (
        <Login setLogined={setLogined} setUserData={setUserData} />
      ) : (
        <MainPage
          setLogined={setLogined}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </div>
  );
}

export default App;
