import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URI } from "../utill/apis";
import { dummyApplied, dummyFiltered } from "../utill/dummies";
import { Course, EmptyCourse, EmptyUserData, UserData } from "../utill/types";
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
  const [filteredCourse, setFilteredCourse] = useState([EmptyCourse]);
  const [applicated, setApplicated] = useState([]);

  // console.log(`std: ${userData.name}`);

  // userData의 정보 가져다가 통신해서 setApplicated 실행.
  const init = async () => {
    await axios
      .get(`${BASE_URI}/course/filter`, {
        params: { label: "major", value: "" },
      })
      .then((value) => {
        setFilteredCourse(value.data);
      })
      .catch((err) => {
        console.log(err);
        setUserData(EmptyUserData);
        setLogined(false);
        alert("잘못된 접근입니다.");
      });
    // await axios
    //   .get(`${BASE_URI}/course/filter`, {
    //     params: { label: "major", value: "" },
    //   })
    //   .then((value) => {
    //     setFilteredCourse(value.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setUserData(EmptyUserData);
    //     setLogined(false);
    //     alert("잘못된 접근입니다.");
    //   });
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <h1>{`${userData.name} 학생`}</h1>
      <Filter setFilteredCourse={setFilteredCourse} />
      <ApplyByCourseId setUserData={setUserData} />
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
