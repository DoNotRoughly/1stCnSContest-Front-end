import React, { useState } from "react";
import { Course } from "../../utill/types";

// Props 타입 명시
interface Props {
  setVisible: (value: boolean) => void;
  course: Course;
}

// 유저 타입에 따라 각각의 메인페이지로 이동.
const CourseModifyModal: React.FC<Props> = ({ setVisible, course }) => {
  const [professor, setProfessor] = useState(course.professor);
  const [name, setName] = useState(course.name);
  const [maxPeople, setmaxPeople] = useState(course.maxPeople);

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
            setVisible(false);
          }}
        >{`수정`}</button>
        <button
          onClick={() => {
            // course 정보 삭제
            setVisible(false);
          }}
        >{`삭제`}</button>
      </p>
    </>
  );
};

export default CourseModifyModal;
