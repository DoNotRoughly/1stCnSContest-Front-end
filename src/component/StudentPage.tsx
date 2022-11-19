import React, { useState } from "react";
import { dummyApplied, dummyFiltered } from "../utill/dummies";
import { Course, EmptyUserData, UserData } from "../utill/types";
import ApplyByCourseId from "./student/ApplyByCourseId";
import CourseTable from "./student/CourseTable";
import Filter from "./student/Filter";

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

  return (
    <>
      <h1>{`${userData.name} 학생`}</h1>
      <Filter setFilteredCourse={setFilteredCourse} />
      <ApplyByCourseId setUserData={setUserData} />
      <CourseTable
        type={0}
        courseList={filteredCourse}
        setUserData={setUserData}
      />
      <hr />
      <CourseTable type={1} courseList={applicated} setUserData={setUserData} />
      <button
        onClick={() => {
          setUserData(EmptyUserData);
          setLogined(false);
        }}
      >
        {`돌아가기`}
      </button>
    </>
  );
};

export default StudentPage;
