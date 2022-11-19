import React, { useState } from "react";
import { Course } from "../../utill/types";

// Props 타입 명시
interface Props {
  setFilteredCourse: (value: Course[]) => void;
}

const Filter: React.FC<Props> = ({ setFilteredCourse }) => {
  const [value, setValue] = useState("");

  const getFilteredCourses = () => {
    // 통신해서 필터된 과목 받아오기
    // let data: Course[] = [];
    // setFilteredCourse(data);
    alert("과목을 조회를 완료했습니다!");
  };

  return (
    <>
      <select>
        <option>학과</option>
        <option>학년</option>
        <option>교수이름</option>
        <option>과목명</option>
        <option>과목번호</option>
      </select>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => getFilteredCourses()}>조회</button>
    </>
  );
};

export default Filter;
