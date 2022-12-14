import React from "react";
import { Course, StudentData } from "../../utill/types";
import AddCourseRow from "./AddCourseRow";
import CourseRow from "./CourseRow";

// Props 타입 명시
interface Props {
  type: number;
  courseList: Course[];
  userData: StudentData;
  setUserData: (value: StudentData) => void;
  setFilteredCourse: (value: Course[]) => void;
}

const CourseTable: React.FC<Props> = ({
  type,
  courseList,
  userData,
  setUserData,
  setFilteredCourse,
}) => {
  return (
    <table>
      <tr>
        <th>학년</th>
        <th>과목번호-분반번호</th>
        <th>과목명</th>
        <th>교수명</th>
        <th>학점</th>
        <th>학과</th>
        <th>신청</th>
        <th>정원</th>
        <th>---</th>
      </tr>
      {courseList.map((course) => (
        <CourseRow
          type={type}
          course={course}
          userData={userData}
          setUserData={setUserData}
          setFilteredCourse={setFilteredCourse}
        />
      ))}
      {type === 2 ? (
        <AddCourseRow setFilteredCourse={setFilteredCourse} />
      ) : (
        <></>
      )}
    </table>
  );
};

export default CourseTable;
