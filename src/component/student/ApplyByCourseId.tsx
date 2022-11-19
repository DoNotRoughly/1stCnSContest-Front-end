import React, { useState } from "react";
import { EmptyUserData, UserData } from "../../utill/types";

// Props 타입 명시
interface Props {
  setUserData: (value: UserData) => void;
}

const ApplyByCourseId: React.FC<Props> = ({ setUserData }) => {
  const [courseId, setCourseId] = useState("");

  const apply = () => {
    // 통신해서 과목번호를 입력하여 수강신청
    let data: UserData = EmptyUserData;
    setUserData(data);
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
