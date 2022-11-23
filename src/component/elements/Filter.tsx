import axios from "axios";
import { BASE_URI } from "../../utill/apis";
import React, { useState } from "react";
import { API_Filtering } from "../../utill/apis";
import { Course } from "../../utill/types";

// Props 타입 명시
interface Props {
  label: string;
  value: string;
  setLable: (value: string) => void;
  setValue: (value: string) => void;
  setFilteredCourse: (value: Course[]) => void;
}

const Filter: React.FC<Props> = ({
  label,
  value,
  setLable,
  setValue,
  setFilteredCourse,
}) => {
  const getFilteredCourses = async () => {
    // 통신해서 필터된 과목 받아오기
    console.log(label, value);
    await axios
      .get(`${BASE_URI}/course/filter`, {
        params: { label: label, value: value },
      })
      .then((value) => {
        setFilteredCourse(value.data);
        alert("과목을 조회를 완료했습니다!");
      })
      .catch((err) => {
        console.log(err);
        alert("과목을 조회를 실패했습니다!");
      });
  };

  return (
    <>
      <select onChange={(e) => setLable(e.target.value)}>
        <option value="major">학과</option>
        <option value="year">학년</option>
        <option value="professor">교수이름</option>
        <option value="name">과목명</option>
        <option value="courseId">과목번호</option>
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
