import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URI } from "../utill/apis";
import { EmptyCourse, NullStudent, StudentData } from "../utill/types";
import ApplyByCourseId from "./elements/ApplyByCourseId";
import CourseTable from "./elements/CourseTable";
import Filter from "./elements/Filter";

// Props 타입 명시
interface Props {
  setLogined: (value: boolean) => void;
  userData: StudentData;
  setUserData: (value: StudentData) => void;
}

const StudentPage: React.FC<Props> = ({
  setLogined,
  userData,
  setUserData,
}) => {
  const [filteredCourse, setFilteredCourse] = useState([EmptyCourse]);
  const [applicated, setApplicated] = useState([EmptyCourse]);

  const [label, setLable] = useState("major");
  const [value, setValue] = useState("");

  // userData의 정보 가져다가 통신해서 setApplicated 실행.
  const init = async () => {
    await axios
      .get(`${BASE_URI}/course/filter`, {
        params: { label: label, value: value },
      })
      .then((value) => {
        setFilteredCourse(value.data);
        setApplicated(userData.course);
      })
      .catch((err) => {
        console.log(err);
        setUserData(NullStudent);
        setLogined(false);
        alert("잘못된 접근입니다.");
      });
  };
  useEffect(() => {
    init();
  }, [userData]);

  return (
    <>
      <h1>{`${userData.name} 학생`}</h1>
      <Filter
        label={label}
        value={value}
        setLable={setLable}
        setValue={setValue}
        setFilteredCourse={setFilteredCourse}
      />
      <ApplyByCourseId userData={userData} setUserData={setUserData} />
      <CourseTable
        type={1}
        courseList={filteredCourse}
        userData={userData}
        setUserData={setUserData}
        setFilteredCourse={setFilteredCourse}
      />
      <hr />
      <CourseTable
        type={0}
        courseList={applicated}
        userData={userData}
        setUserData={setUserData}
        setFilteredCourse={setFilteredCourse}
      />
      <button
        onClick={() => {
          setUserData(NullStudent);
          setLogined(false);
        }}
      >
        {`로그아웃`}
      </button>
    </>
  );
};

export default StudentPage;
