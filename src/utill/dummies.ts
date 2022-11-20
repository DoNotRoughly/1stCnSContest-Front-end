import { Course, UserData } from "./types";

export const dummyStudent: UserData = {
  userId: "201802130", // 학번
  type: "student", // 학생인지 관리자인지, "student" or "admin"
  year: "3", // 학년
  name: "이시형", // 이름
  email: "dcd124012@gmail.com", // 이메일
  applicated: ["10742-00"], // 신청한 과목 리스트
};

export const dummyAdmin: UserData = {
  userId: "200000000", // 학번
  type: "admin", // 학생인지 관리자인지, "student" or "admin"
};

export const dummyFiltered: Course[] = [
  {
    courseId: "37354-00",
    point: 3,
    major: "컴퓨터융합학부",
    year: "3",
    professor: "채승규",
    name: "기초 Spring",
    maxPeople: 30,
    currentPeople: 0,
  },
  {
    courseId: "10742-00",
    point: 2,
    major: "컴퓨터융합학부",
    year: "1",
    professor: "강성엽",
    name: "원랜디개론",
    maxPeople: 40,
    currentPeople: 0,
  },
  {
    courseId: "32659-00",
    point: 3,
    major: "컴퓨터융합학부",
    year: "3",
    professor: "하상호",
    name: "인공지능개론",
    maxPeople: 30,
    currentPeople: 0,
  },
];

export const dummyApplied: Course[] = [
  {
    courseId: "10742-00",
    point: 2,
    major: "컴퓨터융합학부",
    year: "1",
    professor: "강성엽",
    name: "원랜디개론",
    maxPeople: 40,
    currentPeople: 0,
  },
];
