import axios from "axios";
import React, { useState } from "react";
import { BASE_URI } from "../../utill/apis";
import { Course } from "../../utill/types";

// Props 타입 명시
interface Props {
  setVisible: (value: boolean) => void;
  course: Course;
  setFilteredCourse: (value: Course[]) => void;
}

// 유저 타입에 따라 각각의 메인페이지로 이동.
const CourseModifyModal: React.FC<Props> = ({
  setVisible,
  course,
  setFilteredCourse,
}) => {
  const [professor, setProfessor] = useState(course.professor);
  const [name, setName] = useState(course.name);
  const [maxPeople, setmaxPeople] = useState(course.maxPeople);

  const modify = async () => {
    console.log(professor, name, maxPeople);
    let tmp: Course = {
      ...course,
      professor: professor,
      name: name,
      maxPeople: maxPeople,
    };

    await axios
      .patch(`${BASE_URI}/course/modify`, {
        params: { data: JSON.stringify(tmp) },
      })
      .then((value) => {
        console.log(value);
        setFilteredCourse(value.data.result);
        alert("과목을 수정을 완료했습니다!");
      })
      .catch((err) => {
        console.log(err);
        alert("과목을 조회를 실패했습니다!");
      });
  };

  const deleteCourse = async () => {
    await axios
      .delete(`${BASE_URI}/course`, {
        params: { courseId: course.courseId },
      })
      .then((value) => {
        console.log(value.data);
        setFilteredCourse(value.data.result);
        alert("삭제 완료했습니다!");
      })
      .catch((err) => {
        console.log(err);
        alert("삭제 실패했습니다!");
      });
  };

  return (
    <>
      <p>
        {`교수명 : `}
        <input
          type="text"
          value={professor}
          onChange={(event) => {
            setProfessor(event.target.value);
          }}
        />
      </p>
      <p>
        {`과목명 : `}
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </p>
      <p>
        {`정원 : `}
        <input
          type="text"
          value={maxPeople}
          onChange={(event) => {
            setmaxPeople(Number(event.target.value));
          }}
        />
      </p>
      <p>
        <button onClick={() => setVisible(false)}>{`취소`}</button>
        <button
          onClick={() => {
            // course 정보 변경
            modify();
            setVisible(false);
          }}
        >{`수정`}</button>
        <button
          onClick={() => {
            // course 정보 삭제
            deleteCourse();
            setVisible(false);
          }}
        >{`삭제`}</button>
      </p>
    </>
  );
};

export default CourseModifyModal;
