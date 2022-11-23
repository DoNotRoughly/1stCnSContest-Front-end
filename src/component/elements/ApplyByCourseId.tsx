import axios from "axios";
import React, { useState } from "react";
import { BASE_URI } from "../../utill/apis";
import { NullStudent, StudentData } from "../../utill/types";

// Props 타입 명시
interface Props {
  userData: StudentData;
  setUserData: (value: StudentData) => void;
}

const ApplyByCourseId: React.FC<Props> = ({ userData, setUserData }) => {
  const [courseId, setCourseId] = useState("");

  const apply = async () => {
    // 수강 신청을 보냄
    console.log(userData, courseId);
    await axios
      .patch(`${BASE_URI}/user/apply`, {
        params: { userId: userData.userId, courseId: courseId },
      })
      .then((value) => {
        console.log(value);
        setUserData(value.data.user);
        alert("신청되었습니다!");
      })
      .catch((err) => {
        console.log(err.response.data);
        alert("실패했습니다!");
      });
    // 새로고침 안되는 중
    console.log(userData);
  };

  return (
    <>
      {` 과목번호 : `}
      <input
        type="text"
        value={courseId}
        onChange={(event) => setCourseId(event.target.value)}
      />
      <button onClick={() => apply()}>신청</button>
    </>
  );
};

export default ApplyByCourseId;
