// button.tsx
import React from "react";

//* Props 타입 명시
// 컴포넌트가 상위 컴포넌트로 부터 어떤 속성을 전달받을 지에 대한 props 정의
interface ButtonProps {
  width: number; //상위 요소가 버튼의 width를 수정할 수 있게함
  children?: React.ReactNode;
  onClick?: () => void;
}

const alarm = () => {
  alert("Hi~");
};

const Button: React.FC<ButtonProps> = ({
  width,
  children,
  onClick = alarm,
}) => {
  // React.FC (React의 함수형 컴포넌트)
  return (
    <button
      style={{
        width: `${width}px`,
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
