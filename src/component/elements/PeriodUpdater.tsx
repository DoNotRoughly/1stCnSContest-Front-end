import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import { ApplyPeriod } from "../../utill/types";
import axios from "axios";
import { BASE_URI } from "../../utill/apis";

// Props 타입 명시
interface Props {}

const PeriodUpdater: React.FC<Props> = ({}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startHour, setStartHour] = useState(0);
  const [startMinute, setStartMinute] = useState(0);
  const [endDate, setEndDate] = useState(new Date());
  const [endHour, setEndHour] = useState(0);
  const [endMinute, setEndMinute] = useState(0);

  const hourList = Array.from({ length: 24 }, (v, i) => i);
  const minuteList = Array.from({ length: 6 }, (v, i) => i * 10);

  const init = async () => {
    await axios
      .get(`${BASE_URI}/period`, {})
      .then((value) => {
        console.log(value.data);
        const start: Date = new Date(value.data.start);
        const end: Date = new Date(value.data.end);
        console.log(start, end);
        setStartDate(start);
        setStartHour(start.getHours());
        setStartMinute(start.getMinutes());
        setEndDate(end);
        setEndHour(end.getHours());
        setEndMinute(end.getMinutes());
      })
      .catch((err) => {
        console.log(err);
        alert("잘못된 접근입니다.");
      });
  };
  useEffect(() => {
    init();
  }, []);

  const update = async () => {
    // 시간 정보 업데이트
    const p: ApplyPeriod = {
      start: new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate(),
        startHour,
        startMinute
      ),
      end: new Date(
        endDate.getFullYear(),
        endDate.getMonth(),
        endDate.getDate(),
        endHour,
        endMinute
      ),
    };

    console.log(p);
    await axios
      .patch(`${BASE_URI}/period`, {
        params: { period: JSON.stringify(p) },
      })
      .then((value) => {
        console.log(value);
        alert("수강 신청 기간이 설정되었습니다!");
      })
      .catch((err) => {
        console.log(err);
        alert("설정에 실패했습니다!");
      });
  };

  return (
    <div style={{}}>
      {` 시작 시각 : `}
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        locale={ko} // 한글로 변경
        dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
        minDate={new Date()} // 오늘 날짜 전은 선택 못하게
      />
      <select
        value={startHour}
        onChange={(e) => setStartHour(Number(e.target.value))}
      >
        {hourList.map((h) => (
          <option>{h}</option>
        ))}
      </select>
      {`시`}
      <select
        value={startMinute}
        onChange={(e) => setStartMinute(Number(e.target.value))}
      >
        {minuteList.map((m) => (
          <option>{m}</option>
        ))}
      </select>
      {`분`}
      <br />
      {` 종료 시각 : `}
      <DatePicker
        selected={endDate}
        onChange={(date: Date) => setEndDate(date)}
        locale={ko} // 한글로 변경
        dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
        minDate={startDate} // 오늘 날짜 전은 선택 못하게
      />
      <select
        value={endHour}
        onChange={(e) => setEndHour(Number(e.target.value))}
      >
        {hourList.map((h) => (
          <option>{h}</option>
        ))}
      </select>
      {`시`}
      <select
        value={endMinute}
        onChange={(e) => setEndMinute(Number(e.target.value))}
      >
        {minuteList.map((m) => (
          <option>{m}</option>
        ))}
      </select>
      {`분`}
      <button onClick={update}>{`적용`}</button>
    </div>
  );
};

export default PeriodUpdater;
