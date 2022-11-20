import React, { useState } from "react";
import "./App.css";
import LoginPage from "./component/LoginPage";
import MainPage from "./component/MainPage";
import { EmptyUserData } from "./utill/types";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient: QueryClient = new QueryClient();

function App() {
  const [logined, setLogined] = useState(false);
  const [userData, setUserData] = useState(EmptyUserData);

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        {!logined ? (
          <LoginPage setLogined={setLogined} setUserData={setUserData} />
        ) : (
          <MainPage
            setLogined={setLogined}
            userData={userData}
            setUserData={setUserData}
          />
        )}
      </QueryClientProvider>
    </div>
  );
}

export default App;
