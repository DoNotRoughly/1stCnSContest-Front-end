// 타입 정의
export interface UserData {
  userId: string; // 학번 혹은 관리자번호
  type: string; // 학생인지 관리자인지, "student" or "admin"
  year?: string; // 학년
  name?: string; // 이름
  email?: string; // 이메일
  applicated?: string[]; // 신청한 과목의 키번호
}

export interface Course {
  courseId: string; // 과목번호-분반번호
  point: number; // 학점
  major: string; // 학과
  year: string; // 학년
  professor: string; // 교수
  name: string; // 과목 이름
  maxPeople: number; // 총원
  currentPeople: number; // 현재 신청 인원
}

// 각 타입에 의한 null값 정의
export const EmptyUserData: UserData = {
  userId: "",
  type: "",
};
export const EmptyCourse: Course = {
  courseId: "",
  point: 0,
  major: "",
  year: "",
  professor: "",
  name: "",
  maxPeople: 0,
  currentPeople: 0,
};
