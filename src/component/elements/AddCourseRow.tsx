import axios from "axios";
import React, { useState } from "react";
import { BASE_URI } from "../../utill/apis";
import { Course } from "../../utill/types";

// Props 타입 명시
interface Props {
  setFilteredCourse: (value: Course[]) => void;
}

const AddCourseRow: React.FC<Props> = ({ setFilteredCourse }) => {
  const [year, setYear] = useState("");
  const [courseId, setCourseId] = useState("");
  const [name, setName] = useState("");
  const [professor, setProfessor] = useState("");
  const [point, setPoint] = useState("");
  const [major, setMajor] = useState("");
  // currentPeople은 입력받지 않음
  const [maxPeople, setMaxPeople] = useState("");

  const addCourse = async () => {
    // 과목을 추가
    await axios
      .put(`${BASE_URI}/course`, {
        params: {
          course: {
            year: year,
            courseId: courseId,
            name: name,
            professor: professor,
            point: point,
            major: major,
            currentPeople: 0,
            maxPeople: maxPeople,
          },
        },
      })
      .then((value) => {
        setFilteredCourse(value.data.result);
        alert("신청되었습니다!");
      })
      .catch((err) => {
        console.log(err.response.data);
        alert("실패했습니다!");
      });
  };

  return (
    <tr>
      <th>
        <input
          type="text"
          value={year}
          onChange={(event) => {
            setYear(event.target.value);
          }}
        />
      </th>
      <th>
        <input
          type="text"
          value={courseId}
          onChange={(event) => {
            setCourseId(event.target.value);
          }}
        />
      </th>
      <th>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </th>
      <th>
        <input
          type="text"
          value={professor}
          onChange={(event) => {
            setProfessor(event.target.value);
          }}
        />
      </th>
      <th>
        <input
          type="text"
          value={point}
          onChange={(event) => {
            setPoint(event.target.value);
          }}
        />
      </th>
      <th>
        <input
          type="text"
          value={major}
          onChange={(event) => {
            setMajor(event.target.value);
          }}
        />
      </th>
      <th>{`---`}</th>
      <th>
        <input
          type="text"
          value={maxPeople}
          onChange={(event) => {
            setMaxPeople(event.target.value);
          }}
        />
      </th>
      <th>
        <button onClick={addCourse}>추가</button>
      </th>
    </tr>
  );
};

export default AddCourseRow;
