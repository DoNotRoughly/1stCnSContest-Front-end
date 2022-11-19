import React, { useState } from "react";
import { Course, EmptyUserData, UserData } from "../../utill/types";

// Props 타입 명시
interface Props {
  type: number;
  course: Course;
  setUserData: (value: UserData) => void;
}

const CourseRow: React.FC<Props> = ({ type, course, setUserData }) => {
  const apply = () => {
    // 수강 신청을 보냄
    let data: UserData = EmptyUserData;
    setUserData(data);
  };

  const cancel = () => {
    // 취소 신청 보냄
    let data: UserData = EmptyUserData;
    setUserData(data);
  };

  return (
    <tr>
      <th>{course.year}</th>
      <th>{course.courseId}</th>
      <th>{course.name}</th>
      <th>{course.professor}</th>
      <th>{course.point}</th>
      <th>{course.major}</th>
      <th>{course.studentIds.length}</th>
      <th>{course.maxPeople}</th>
      {type ? (
        <th>
          <button onClick={cancel}>취소</button>
        </th>
      ) : (
        <th>
          <button onClick={apply}>신청</button>
        </th>
      )}
    </tr>
  );
};

export default CourseRow;
