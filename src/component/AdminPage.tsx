import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URI } from "../utill/apis";
import { EmptyCourse, NullStudent } from "../utill/types";
import CourseTable from "./elements/CourseTable";
import Filter from "./elements/Filter";
import PeriodUpdater from "./elements/PeriodUpdater";

// Props 타입 명시
interface Props {
  setLogined: (value: boolean) => void;
}

const AdminPage: React.FC<Props> = ({ setLogined }) => {
  const [filteredCourse, setFilteredCourse] = useState([EmptyCourse]);

  const [label, setLable] = useState("major");
  const [value, setValue] = useState("");

  const init = async () => {
    await axios
      .get(`${BASE_URI}/course/filter`, {
        params: { label: label, value: value },
      })
      .then((value) => {
        setFilteredCourse(value.data);
      })
      .catch((err) => {
        console.log(err);
        setLogined(false);
        alert("잘못된 접근입니다.");
      });
  };
  useEffect(() => {
    init();
    console.log(filteredCourse);
  }, []);

  return (
    <>
      <h1>{`응애 관리자 페이지`}</h1>
      <PeriodUpdater /> <br />
      <Filter
        label={label}
        value={value}
        setLable={setLable}
        setValue={setValue}
        setFilteredCourse={setFilteredCourse}
      />
      <CourseTable
        type={2}
        courseList={filteredCourse}
        userData={NullStudent}
        setUserData={() => {}}
        setFilteredCourse={setFilteredCourse}
      />
      <button onClick={() => setLogined(false)}>{`로그아웃`}</button>
    </>
  );
};

export default AdminPage;
