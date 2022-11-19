import React, { useState } from "react";
import { dummyApplied, dummyFiltered } from "../utill/dummies";
import { Course, EmptyUserData, UserData } from "../utill/types";
import ApplyByCourseId from "./elements/ApplyByCourseId";
import CourseTable from "./elements/CourseTable";
import Filter from "./elements/Filter";

// Props 타입 명시
interface Props {
  setLogined: (value: boolean) => void;
  userData: UserData;
  setUserData: (value: UserData) => void;
}

const StudentPage: React.FC<Props> = ({
  setLogined,
  userData,
  setUserData,
}) => {
  // const emptyList: Course[] = [];
  const [filteredCourse, setFilteredCourse] = useState(dummyFiltered);
  const [applicated, setApplicated] = useState(dummyApplied);

  // userData의 정보 가져다가 통신해서 setApplicated 실행.

  return (
    <>
      <h1>{`${userData.name} 학생`}</h1>
      <Filter setFilteredCourse={setFilteredCourse} />
      <ApplyByCourseId setUserData={setUserData} />
      <CourseTable
        type={1}
        courseList={filteredCourse}
        setUserData={setUserData}
      />
      <hr />
      <CourseTable type={0} courseList={applicated} setUserData={setUserData} />
      <button
        onClick={() => {
          setUserData(EmptyUserData);
          setLogined(false);
        }}
      >
        {`로그아웃`}
      </button>
    </>
  );
};

export default StudentPage;
