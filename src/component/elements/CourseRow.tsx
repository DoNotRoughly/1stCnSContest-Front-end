import axios from "axios";
import React, { useState } from "react";
import { BASE_URI } from "../../utill/apis";
import { Course, NullStudent, StudentData } from "../../utill/types";
import CourseModifyModal from "./CourseModifyModal";

// Props 타입 명시
interface Props {
  type: number;
  course: Course;
  userData: StudentData;
  setUserData: (value: StudentData) => void;
  setFilteredCourse: (value: Course[]) => void;
}

const CourseRow: React.FC<Props> = ({
  type,
  course,
  userData,
  setUserData,
  setFilteredCourse,
}) => {
  const [visible, setVisible] = useState(false);

  // console.log(`row: ${userData.name}`);

  const cancel = async () => {
    // 취소 신청 보냄
    console.log(userData, course);
    await axios
      .patch(`${BASE_URI}/user/cancel`, {
        params: { userId: userData.userId, courseId: course.courseId },
      })
      .then((value) => {
        console.log(value);
        setUserData(value.data.user);
        alert("신청 취소되었습니다!");
      })
      .catch((err) => {
        console.log(err.response.data);
        alert("실패했습니다!");
      });
    console.log(userData);
  };

  const apply = async () => {
    // 수강 신청을 보냄
    console.log(userData, course);
    await axios
      .patch(`${BASE_URI}/user/apply`, {
        params: { userId: userData.userId, courseId: course.courseId },
      })
      .then((value) => {
        console.log(value);
        setUserData(value.data.user);
        alert("신청되었습니다!");
      })
      .catch((err) => {
        console.log(err.response.data);
        alert("실패했습니다!");
      });
    console.log(userData);
  };

  return (
    <tr>
      <th>{course.year}</th>
      <th>{course.courseId}</th>
      <th>{course.name}</th>
      <th>{course.professor}</th>
      <th>{course.point}</th>
      <th>{course.major}</th>
      <th>{course.currentPeople}</th>
      <th>{course.maxPeople}</th>
      {type === 0 ? (
        <th>
          <button onClick={cancel}>취소</button>
        </th>
      ) : type === 1 ? (
        <th>
          <button onClick={apply}>신청</button>
        </th>
      ) : type === 2 ? (
        <th>
          <button onClick={() => setVisible(true)}>수정</button>
        </th>
      ) : (
        <th>{`잘못된 정보입니다.`}</th>
      )}
      {visible && (
        <CourseModifyModal
          setVisible={setVisible}
          course={course}
          setFilteredCourse={setFilteredCourse}
        />
      )}
    </tr>
  );
};

export default CourseRow;
