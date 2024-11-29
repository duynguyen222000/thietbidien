import Header from "@/components/Header";
import React from "react";
interface IProps {
  children: React.ReactNode;
}
const LayoutPage = ({ children }: IProps) => {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
};

export default LayoutPage;