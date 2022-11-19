import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

// Props 타입 명시
interface Props {}

const PeriodUpdater: React.FC<Props> = ({}) => {
  const hourList = Array.from({ length: 24 }, (v, i) => i);
  const minuteList = Array.from({ length: 6 }, (v, i) => i * 10);
  const [startDate, setStartDate] = useState(new Date());
  const [startHour, setStartHour] = useState(0);
  const [startMinute, setStartMinute] = useState(0);
  const [endDate, setEndDate] = useState(new Date());
  const [endHour, setEndHour] = useState(0);
  const [endMinute, setEndMinute] = useState(0);

  const update = () => {
    // 시간 정보 업데이트
    setStartDate(
      new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate(),
        startHour,
        startMinute
      )
    );
    setEndDate(
      new Date(
        endDate.getFullYear(),
        endDate.getMonth(),
        endDate.getDate(),
        endHour,
        endMinute
      )
    );
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
      <select onChange={(e) => setStartHour(Number(e.target.value))}>
        {hourList.map((h) => (
          <option>{h}</option>
        ))}
      </select>
      {`시`}
      <select onChange={(e) => setStartMinute(Number(e.target.value))}>
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
      <select onChange={(e) => setEndHour(Number(e.target.value))}>
        {hourList.map((h) => (
          <option>{h}</option>
        ))}
      </select>
      {`시`}
      <select onChange={(e) => setEndMinute(Number(e.target.value))}>
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
