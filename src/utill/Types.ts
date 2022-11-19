export interface UserData {
  type: string; // 학생인지 관리자인지, "student" or "admin"
  id: string; // 학번 혹은 관리자번호
  year?: string; // 학년
  name?: string; // 이름
  email?: string; // 이메일
  applicated?: CourseID[]; // 신청한 과목 번호 리스트
}
export const EmptyUserData: UserData = {
  type: "",
  id: "",
};

export interface CourseID {
  id: string; // 과목 번호
  division: string; // 분반 번호
}
export interface Course {
  courseId: CourseID;
  point: number; // 학점
  major: string; // 학과
  year: string; // 학년
  professor: string; // 교수
  name: string; // 과목 이름
  maxPeople: number; // 총원
  studentIds: string[]; // 현재 신청 인원의 학번들
}
export const EmptyCourse = {
  courseId: { id: "", division: "" },
  division: "",
  major: "",
  year: "",
  professor: "",
  name: "",
  maxPeople: 0,
  currentPeople: 0,
};
