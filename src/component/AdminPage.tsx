import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URI } from "../utill/apis";
import { dummyFiltered } from "../utill/dummies";
import CourseTable from "./elements/CourseTable";
import Filter from "./elements/Filter";
import PeriodUpdater from "./elements/PeriodUpdater";

// Props 타입 명시
interface Props {
  setLogined: (value: boolean) => void;
}

const AdminPage: React.FC<Props> = ({ setLogined }) => {
  const [filteredCourse, setFilteredCourse] = useState(dummyFiltered);

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
        setLogined(false);
        alert("잘못된 접근입니다.");
      });
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <h1>{`응애 관리자 페이지`}</h1>
      <PeriodUpdater /> <br />
      <Filter setFilteredCourse={setFilteredCourse} />
      <CourseTable
        type={2}
        courseList={filteredCourse}
        setUserData={() => {}}
        setFilteredCourse={setFilteredCourse}
      />
      <button onClick={() => setLogined(false)}>{`로그아웃`}</button>
    </>
  );
};

export default AdminPage;
