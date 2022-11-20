import React, { useState } from "react";
import { dummyFiltered } from "../utill/dummies";
import { UserData } from "../utill/types";
import CourseTable from "./elements/CourseTable";
import Filter from "./elements/Filter";
import PeriodUpdater from "./elements/PeriodUpdater";

// Props 타입 명시
interface Props {
  setLogined: (value: boolean) => void;
}

const AdminPage: React.FC<Props> = ({ setLogined }) => {
  const [filteredCourse, setFilteredCourse] = useState(dummyFiltered);

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
