import Image from "next/image";
import React from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

const HeaderCenter = () => {
  return (
    <div className="header-center">
      <div className="container">
        <div className="layout">
          <div className="logo">
            <Image
              src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/logo.svg"
              width={200}
              height={32}
              alt="logo "
            />
          </div>
          <div className="hambuger-category">
            <BsFillMenuButtonWideFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCenter;
